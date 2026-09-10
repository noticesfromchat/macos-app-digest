import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import process from 'node:process';

const root = process.cwd();
const checkedRoots = ['src/content', 'src/pages', 'src/components', 'src/layouts', 'src/data'];
const checkedExtensions = new Set(['.astro', '.md', '.ts']);
const oxfordCommaPattern = /\b[\w'’-]+(?:\s+[\w'’-]+)*,\s+[^,\n]+,\s+(?:and|or)\b/i;

/* The Plain Dash Rule, checked wherever reader-facing copy is written rather than in
   `src/content` alone. Scanning only content used to stand in for the rule's three
   exemptions, which meant copy authored straight into a component or a layout was
   never checked at all. The exemptions are expressed directly now, so the check can
   reach every root:

   - Code comments are not copy. Block, line and HTML comments are stripped before a
     line is tested, and block state carries across lines so a dash inside a multi-line
     comment stays exempt.
   - Page-title separators are an indexed SEO convention, so a line assigning or
     passing a `title` keeps its dash, in frontmatter (`title:`) and in markup or code
     (`title=`, `title = `) alike.
   - Quoted external titles keep the source's own punctuation, which the same `title`
     exemption covers.

   See The Plain Dash Rule in DESIGN.md and Editorial punctuation in
   docs/STYLE_GUIDE.md. */
const editorialDashPattern = /[—–]/;
/* The Two Digit Issue Rule. Records store the number three digits wide; published copy
   writes two. The rule was implemented three separate times and skipped in five more
   before it was written down, so it is checked here rather than trusted. `src/data/issue.ts`
   is the one place allowed to produce the label. */
const issueNumberPattern = /\bIssue\s+\d{3}\b/;
/* The Catalog Spelling Rule. Public copy writes "catalog". The site carried both spellings
   on 2026-09-09: the 404 page's own controls read "Catalog" while the social card that
   page generates read "catalogue", and the two only met because a single change edited
   both.

   The rule governs what a reader sees, so three kinds of span are not copy and are blanked
   before a line is tested: URLs, path and slug literals, and identifiers. Comments are
   already blanked upstream by stripComments. Blanking rather than exempting the whole line
   is the point — a URL carrying the word must not buy an exemption for the prose beside it,
   which is exactly the shape `<a href="/catalogue/">Browse the catalogue</a>` has. */
const catalogueSpellingPattern = /\bcatalogues?\b/i;

/* Spans that are addressing or code rather than copy. Order matters only in that URLs go
   first: a URL can contain something that also looks like a slug. */
const nonCopyPatterns = [
  /\b[a-z][a-z0-9+.-]*:\/\/[^\s"'`<>()[\]]+/gi,
  /\bmailto:[^\s"'`<>()[\]]+/gi,
  /(['"`])\.{0,2}\/[^\s'"`]*\1/g,
  /(['"`])[A-Za-z0-9._~]+(?:-[A-Za-z0-9._~]+)+\1/g,
  /(?<![\w$])\.{0,2}\/[A-Za-z0-9._~\-]+(?:\/[A-Za-z0-9._~\-]*)+/g,
  /\b(?:const|let|var|function|class|interface|type|enum)\s+catalogues?\b/gi,
  /\.catalogues?\b/gi,
  /\bcatalogues?\s*=(?!=)/gi,
  /(?:^|[{,]\s*)catalogues?\s*:/gim,
  /[{,]\s*catalogues?\s*(?=[},])/gi,
  /\bcatalogues?\s*\(/gi
];

/* Replaces each non-copy span with spaces of the same length, so column positions hold and
   any real copy sharing the line stays testable. */
export function blankNonCopy(text) {
  let output = text;

  for (const pattern of nonCopyPatterns) {
    output = output.replace(pattern, (match) => ' '.repeat(match.length));
  }

  return output;
}

export function hasCatalogueViolation(copy) {
  return catalogueSpellingPattern.test(blankNonCopy(copy));
}
const titleExemptionPattern = /(?:^|[\s{[(])title\s*[:=]/i;
const errors = [];

/* Returns the line with comment spans blanked out, plus the block-comment state to
   carry into the next line. Blanking rather than dropping keeps column meaning intact
   and leaves any real copy sharing the line still testable. */
function stripComments(line, state) {
  let output = '';
  let index = 0;
  let inBlock = state.inBlock;
  let inHtml = state.inHtml;

  while (index < line.length) {
    const rest = line.slice(index);

    if (inBlock) {
      const close = rest.indexOf('*/');
      if (close === -1) return { text: output, state: { inBlock: true, inHtml } };
      index += close + 2;
      inBlock = false;
      continue;
    }

    if (inHtml) {
      const close = rest.indexOf('-->');
      if (close === -1) return { text: output, state: { inBlock, inHtml: true } };
      index += close + 3;
      inHtml = false;
      continue;
    }

    if (rest.startsWith('/*')) {
      inBlock = true;
      index += 2;
      continue;
    }

    if (rest.startsWith('<!--')) {
      inHtml = true;
      index += 4;
      continue;
    }

    /* A line comment, but not the `//` inside a URL. */
    if (rest.startsWith('//') && line[index - 1] !== ':') {
      return { text: output, state: { inBlock, inHtml } };
    }

    output += line[index];
    index += 1;
  }

  return { text: output, state: { inBlock, inHtml } };
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await walk(absolute);
      continue;
    }

    if (!checkedExtensions.has(path.extname(entry.name))) continue;

    const relative = path.relative(root, absolute);
    const lines = (await readFile(absolute, 'utf8')).split(/\r?\n/);
    let state = { inBlock: false, inHtml: false };

    lines.forEach((line, index) => {
      const stripped = stripComments(line, state);
      const copy = stripped.text;
      state = stripped.state;

      if (oxfordCommaPattern.test(copy)) {
        errors.push(`${relative}:${index + 1}: avoid Oxford commas in public editorial copy`);
      }

      if (issueNumberPattern.test(copy)) {
        errors.push(
          `${relative}:${index + 1}: write an issue number two digits wide; use issueLabel or issueName from src/data/issue.ts`
        );
      }

      if (hasCatalogueViolation(copy)) {
        errors.push(`${relative}:${index + 1}: write "catalog" in public copy, not "catalogue"`);
      }

      if (editorialDashPattern.test(copy) && !titleExemptionPattern.test(copy)) {
        errors.push(
          `${relative}:${index + 1}: avoid em dashes and en dashes in public editorial copy; use a period, a comma, a colon, parentheses or a plain hyphen`
        );
      }
    });
  }
}

/* Only scan when run as a command. The rule helpers above are imported by
   check-editorial-style.test.mjs, which must not trigger a repository walk. */
if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  for (const directory of checkedRoots) {
    await walk(path.join(root, directory));
  }

  if (errors.length) {
    console.error(`Editorial style check failed with ${errors.length} issue${errors.length === 1 ? '' : 's'}:\n`);
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }

  console.log('Editorial style check passed.');
}
