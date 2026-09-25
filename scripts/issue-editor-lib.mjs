/* Reading and writing the text an issue carries in its own voice.
 *
 * The catalogue editor's other tabs own records that are one flat object each. An issue
 * is not: it holds a standfirst, a feed title, five section titles, an optional pick
 * reason, a video and up to five readings, nested two and three deep in YAML. Only the
 * prose is editable here. Numbers, slugs, dates, section eyebrows, app lists, the pick's
 * app and every URL are structure rather than writing, and a typo in one of them breaks
 * a route or drops an app from an issue rather than reading badly.
 *
 * Writes are surgical. The frontmatter is edited line by line rather than parsed and
 * re-serialised, because a round trip through a YAML printer reformats quoting, folds
 * long lines and drops the comments an issue file carries. The same reason the taxonomy
 * lib edits TypeScript with anchored patterns instead of rewriting the module.
 *
 * Validation mirrors `src/content.config.ts` and `scripts/validate-content.mjs`,
 * including the word counts and the editorial style rules, so the editor cannot write
 * something that passes here and fails `npm run validate`. An editor that can break the
 * build is worse than no editor.
 */
import { access, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'yaml';

const issuesDirectory = (root) => path.join(root, 'src/content/issues');

const words = (value) => String(value ?? '').trim().split(/\s+/).filter(Boolean).length;
const sentences = (value) => (String(value ?? '').trim().match(/[.!?](?:["')\]]+)?(?:\s|$)/g) ?? []).length || 1;

/* The checks `scripts/check-editorial-style.mjs` runs over src/content. Reproduced rather
   than imported because that script scans files and exits; this needs one string at a
   time and a message a writer can act on. */
const oxfordComma = /\b[\w'’-]+(?:\s+[\w'’-]+)*,\s+[^,\n]+,\s+(?:and|or)\b/i;

function styleProblem(value, { externalTitle = false } = {}) {
  if (!externalTitle && /[—–]/.test(value)) return 'Use a comma, a colon or parentheses rather than a dash.';
  if (/[‘’“”]/.test(value)) return 'Use straight quotes and apostrophes.';
  if (/catalogue/i.test(value)) return 'Write "catalog" in reader-facing copy.';
  if (oxfordComma.test(value)) return 'Drop the comma before "and" or "or" in a list.';
  return null;
}

export const issueLimits = {
  dek: { chars: [80, 320], words: [18, 45], label: 'Dek' },
  metaDescription: { chars: [70, 160], label: 'Search description' },
  rssTitle: { chars: [4, 90], label: 'Issue title' },
  sectionTitle: { chars: [1, 100], label: 'Section title' },
  reason: { chars: [40, 280], words: [12, 45], label: "Editor's Pick reason" },
  videoTitle: { chars: [1, 140], label: 'Video title' },
  videoCreator: { chars: [1, 80], label: 'Video creator' },
  videoDescription: { chars: [40, 280], label: 'Video description' },
  readingTitle: { chars: [1, 100], label: 'Reading title' },
  readingPublication: { chars: [1, 60], label: 'Publication' },
  readingDescription: { chars: [40, 240], words: [12, 35], label: 'Reading description' }
};

function checkField(value, limitKey) {
  const limit = issueLimits[limitKey];
  if (typeof value !== 'string') return `${limit.label} must be text.`;
  const trimmed = value.trim();
  if (!trimmed) return `${limit.label} cannot be empty.`;
  if (/\r|\n/.test(trimmed)) return `${limit.label} must stay on one line.`;
  const [minChars, maxChars] = limit.chars;
  if (trimmed.length < minChars) return `${limit.label} must be at least ${minChars} characters. It is ${trimmed.length}.`;
  if (trimmed.length > maxChars) return `${limit.label} must be ${maxChars} characters or fewer. It is ${trimmed.length}.`;
  if (limit.words) {
    const [minWords, maxWords] = limit.words;
    const count = words(trimmed);
    if (count < minWords || count > maxWords) {
      return `${limit.label} must be ${minWords} to ${maxWords} words. It is ${count}.`;
    }
  }
  /* A reading or video title is the source's own, and keeps its own punctuation: the
     checker exempts every `title:` line for the same reason. */
  return styleProblem(trimmed, { externalTitle: limitKey === 'readingTitle' || limitKey === 'videoTitle' });
}

/* `{rss.title} — Issue {label} — App Waypoint`, the same assembly validate-content.mjs
   checks. The label drops a leading zero while two digits remain, so 011 reads 11. */
function pageTitleProblem(rssTitle, number) {
  const label = String(number ?? '').replace(/^0+(?=\d\d)/, '');
  const assembled = `${rssTitle} — Issue ${label} — App Waypoint`;
  if (assembled.length >= 60) {
    return `With "Issue ${label} — App Waypoint" this makes a ${assembled.length} character page title. It must stay under 60.`;
  }
  if (/[.]$/.test(rssTitle)) return 'An issue title is a headline, not a sentence, so it takes no full stop.';
  return null;
}

const iconNamePattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validateIssueInput(input, issue) {
  const errors = {};
  const add = (key, message) => { if (message) errors[key] = message; };

  add('dek', checkField(input?.dek, 'dek'));
  /* Optional, as in the schema: empty means the dek stands in for it. */
  if (typeof input?.metaDescription !== 'string') errors.metaDescription = 'Search description must be text.';
  else if (input.metaDescription.trim()) add('metaDescription', checkField(input.metaDescription, 'metaDescription'));
  add('rssTitle', checkField(input?.rssTitle, 'rssTitle') ?? pageTitleProblem(String(input?.rssTitle ?? '').trim(), issue.number));
  /* Optional, as in the schema. Empty removes it and the homepage shows the archive box.
     Whether the name exists in the icon set is checked on save, against the files. */
  if (input?.icon !== undefined) {
    if (typeof input.icon !== 'string') errors.icon = 'Icon must be text.';
    else if (input.icon.trim() && !iconNamePattern.test(input.icon.trim())) {
      errors.icon = 'Write a Phosphor icon name in lowercase with hyphens, such as flower-lotus.';
    }
  }

  const sections = Array.isArray(input?.sections) ? input.sections : [];
  if (sections.length !== issue.sections.length) {
    errors.sections = 'Section titles do not match this issue.';
  } else {
    sections.forEach((title, index) => add(`sections.${index}`, checkField(title, 'sectionTitle')));
  }

  if (issue.reason !== null) add('reason', checkField(input?.reason, 'reason'));

  if (issue.video) {
    add('video.title', checkField(input?.video?.title, 'videoTitle'));
    add('video.creator', checkField(input?.video?.creator, 'videoCreator'));
    add('video.description', checkField(input?.video?.description, 'videoDescription'));
  }

  const readings = Array.isArray(input?.readings) ? input.readings : [];
  if (readings.length !== issue.readings.length) {
    errors.readings = 'Weekend Reading entries do not match this issue.';
  } else {
    readings.forEach((reading, index) => {
      add(`readings.${index}.title`, checkField(reading?.title, 'readingTitle'));
      add(`readings.${index}.publication`, checkField(reading?.publication, 'readingPublication'));
      add(`readings.${index}.description`, checkField(reading?.description, 'readingDescription'));
    });
  }

  return errors;
}

function splitFrontmatter(source, id) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(\r?\n[\s\S]*)?$/);
  if (!match) throw new Error(`Issue ${id} has no frontmatter.`);
  return { body: match[1], rest: match[2] ?? '\n' };
}

function readIssue(source, id) {
  const { body } = splitFrontmatter(source, id);
  const data = parse(body);
  return {
    id,
    number: data.number,
    name: `Issue ${String(data.number ?? '').replace(/^0+(?=\d\d)/, '')} · ${data.date ?? id}`,
    date: data.date ?? '',
    dek: data.dek ?? '',
    metaDescription: data.metaDescription ?? '',
    icon: data.icon ?? '',
    rssTitle: data.rss?.title ?? '',
    sections: (data.sections ?? []).map((section) => ({ eyebrow: section.eyebrow, title: section.title })),
    pickApp: data.editorsPick?.app ?? null,
    reason: data.editorsPick?.reason ?? null,
    video: data.video ? { title: data.video.title, creator: data.video.creator, description: data.video.description } : null,
    readings: (data.readings ?? []).map((reading) => ({
      title: reading.title,
      publication: reading.publication,
      description: reading.description
    }))
  };
}

export async function loadIssues(root) {
  const directory = issuesDirectory(root);
  const filenames = (await readdir(directory)).filter((name) => name.endsWith('.md'));
  const issues = await Promise.all(filenames.map(async (filename) => {
    const id = path.basename(filename, '.md');
    return readIssue(await readFile(path.join(directory, filename), 'utf8'), id);
  }));
  /* Newest first. An editor almost always wants the issue being prepared, and that is
     the last one by slug, which is its publication date. */
  return issues.sort((a, b) => b.id.localeCompare(a.id));
}

/* YAML scalars, written the way the issue files already write them: plain when plain is
   unambiguous, single quoted otherwise, with an internal quote doubled.
 *
 * The leading-character test has to include both quote marks. A reading title in issue 07
 * opens with one, `'Obvious' App Store Ratings Fraud`, and an earlier version of this
 * emitted it unquoted, which is not valid YAML and would have written a file the build
 * could not read. Only a value that is entirely a number is risky, not one that merely
 * starts with a digit: `512 Pixels` and `9to5Mac` are plain strings and were being quoted
 * for nothing. */
function scalar(value) {
  if (value === '') return "''";
  const risky = /^[\s>|&*!%@`{}[\]#,?:'"-]/.test(value)
    || /\s$/.test(value)
    || value.includes(': ')
    || value.includes(' #')
    || /^(?:true|false|null|~|[-+]?\d+(?:\.\d+)?(?:[eE][-+]?\d+)?)$/i.test(value);
  return risky ? `'${value.replace(/'/g, "''")}'` : value;
}

/* Replaces the value on one `key:` line, found by walking the frontmatter with an
   indentation-aware cursor rather than a single pattern. A pattern loose enough to find
   `title:` inside `video:` also finds it inside `rss:` and inside every reading. */
function setValue(lines, lineIndex, key, value, previous) {
  if (previous !== undefined && value === previous) return;
  const line = lines[lineIndex];
  const match = line.match(new RegExp(`^(\\s*(?:- )?${key}:\\s*)`));
  if (!match) throw new Error(`Expected ${key} on line ${lineIndex + 1}.`);
  lines[lineIndex] = match[1] + scalar(value);
}

const indentOf = (line) => line.match(/^\s*/)[0].length;

function findTopLevel(lines, key) {
  const index = lines.findIndex((line) => new RegExp(`^${key}:`).test(line));
  if (index === -1) throw new Error(`Could not find ${key}.`);
  return index;
}

/* The lines belonging to a top level block, its own line excluded. */
function blockRange(lines, key) {
  const start = findTopLevel(lines, key);
  let end = start + 1;
  while (end < lines.length && (lines[end].trim() === '' || indentOf(lines[end]) > 0)) end += 1;
  return [start, end];
}

function childLine(lines, key, child) {
  const [start, end] = blockRange(lines, key);
  for (let index = start + 1; index < end; index += 1) {
    if (new RegExp(`^\\s+${child}:`).test(lines[index])) return index;
  }
  throw new Error(`Could not find ${key}.${child}.`);
}

/* Each `- ` under a sequence key starts an item; the lines under it at deeper indent
   belong to it. Returns one array of line indexes per item. */
function sequenceItems(lines, key) {
  const [start, end] = blockRange(lines, key);
  const items = [];
  for (let index = start + 1; index < end; index += 1) {
    if (/^\s*- /.test(lines[index])) items.push([index]);
    else if (items.length && lines[index].trim() !== '') items.at(-1).push(index);
  }
  return items;
}

function setInItem(lines, itemLines, field, value, previous) {
  const target = itemLines.find((index) => new RegExp(`^\\s*(?:- )?${field}:`).test(lines[index]));
  if (target === undefined) throw new Error(`Could not find ${field} in a sequence item.`);
  setValue(lines, target, field, value, previous);
}

export function applyIssueEdits(source, id, input, issue) {
  const { body, rest } = splitFrontmatter(source, id);
  const lines = body.split('\n');

  setValue(lines, findTopLevel(lines, 'dek'), 'dek', input.dek.trim(), issue.dek);

  /* The one optional top level line. Written before `rss:` when it is new, and removed
     rather than emptied when it is cleared, which is what the schema's optional means. */
  const metaDescription = input.metaDescription.trim();
  const metaIndex = lines.findIndex((line) => /^metaDescription:/.test(line));
  if (metaIndex !== -1 && metaIndex + 1 < lines.length && /^\s+\S/.test(lines[metaIndex + 1])) {
    throw new Error('metaDescription runs over several lines. Edit it in the issue file.');
  }
  if (metaDescription && metaIndex !== -1) {
    setValue(lines, metaIndex, 'metaDescription', metaDescription, issue.metaDescription);
  } else if (metaDescription) {
    lines.splice(findTopLevel(lines, 'rss'), 0, `metaDescription: ${scalar(metaDescription)}`);
  } else if (metaIndex !== -1) {
    lines.splice(metaIndex, 1);
  }
  /* The other optional top level line, handled the same way: written before `rss:` when
     new, removed when cleared. A request without the field leaves the file alone. */
  if (input.icon !== undefined) {
    const icon = input.icon.trim();
    const iconIndex = lines.findIndex((line) => /^icon:/.test(line));
    if (icon && iconIndex !== -1) setValue(lines, iconIndex, 'icon', icon, issue.icon);
    else if (icon) lines.splice(findTopLevel(lines, 'rss'), 0, `icon: ${scalar(icon)}`);
    else if (iconIndex !== -1) lines.splice(iconIndex, 1);
  }
  setValue(lines, childLine(lines, 'rss', 'title'), 'title', input.rssTitle.trim(), issue.rssTitle);

  sequenceItems(lines, 'sections').forEach((itemLines, index) => {
    setInItem(lines, itemLines, 'title', input.sections[index].trim(), issue.sections[index].title);
  });

  if (issue.reason !== null) {
    setValue(lines, childLine(lines, 'editorsPick', 'reason'), 'reason', input.reason.trim(), issue.reason);
  }

  if (issue.video) {
    for (const field of ['title', 'creator', 'description']) {
      setValue(lines, childLine(lines, 'video', field), field, input.video[field].trim(), issue.video[field]);
    }
  }

  sequenceItems(lines, 'readings').forEach((itemLines, index) => {
    for (const field of ['title', 'publication', 'description']) {
      setInItem(lines, itemLines, field, input.readings[index][field].trim(), issue.readings[index][field]);
    }
  });

  return `---\n${lines.join('\n')}\n---${rest}`;
}

export async function saveIssueRecord(root, id, input) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(id)) {
    throw Object.assign(new Error('Unknown issue.'), { statusCode: 404 });
  }
  const file = path.join(issuesDirectory(root), `${id}.md`);
  let source;
  try {
    source = await readFile(file, 'utf8');
  } catch {
    throw Object.assign(new Error('Unknown issue.'), { statusCode: 404 });
  }

  const issue = readIssue(source, id);
  const errors = validateIssueInput(input, issue);
  const icon = typeof input?.icon === 'string' ? input.icon.trim() : '';
  if (!errors.icon && icon) {
    try {
      await access(path.join(root, 'node_modules/@phosphor-icons/core/assets/regular', `${icon}.svg`));
    } catch {
      errors.icon = `"${icon}" is not in the Phosphor icon set. Browse the names at phosphoricons.com.`;
    }
  }
  if (Object.keys(errors).length) {
    throw Object.assign(new Error('Please correct the highlighted fields.'), {
      statusCode: 422,
      fieldErrors: errors
    });
  }

  const updated = applyIssueEdits(source, id, input, issue);
  /* Read back before writing. A surgical edit that produced invalid YAML would otherwise
     land on disk and break the build, which is exactly what this lib exists to prevent. */
  const reparsed = readIssue(`${updated}`, id);
  await writeFile(file, updated, 'utf8');
  return reparsed;
}
