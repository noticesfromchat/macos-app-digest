import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { parse } from 'yaml';

const root = process.cwd();
const appsDir = path.join(root, 'src/content/apps');
const issuesDir = path.join(root, 'src/content/issues');
const errors = [];

async function markdownFiles(directory) {
  return (await readdir(directory))
    .filter((name) => name.endsWith('.md'))
    .sort();
}

function frontmatter(text, filename) {
  const match = text.match(/^---\s*\n([\s\S]*?)\n---(?:\s*\n|$)/);
  if (!match) {
    errors.push(`${filename}: missing YAML frontmatter`);
    return {};
  }

  try {
    return parse(match[1]) ?? {};
  } catch (error) {
    errors.push(`${filename}: invalid YAML (${error.message})`);
    return {};
  }
}

function wordCount(value) {
  return String(value ?? '').trim().split(/\s+/).filter(Boolean).length;
}

function sentenceCount(value) {
  const text = String(value ?? '').trim();
  if (!text) return 0;
  return (text.match(/[.!?](?:["')\]]+)?(?:\s|$)/g) ?? []).length || 1;
}

function checkLength(filename, label, value, minWords, maxWords) {
  const count = wordCount(value);
  if (count < minWords || count > maxWords) {
    errors.push(`${filename}: ${label} should be ${minWords}-${maxWords} words (found ${count})`);
  }
}

const appFiles = await markdownFiles(appsDir);
const appIds = new Set(appFiles.map((filename) => path.basename(filename, '.md')));

for (const filename of appFiles) {
  const relative = `src/content/apps/${filename}`;
  const data = frontmatter(await readFile(path.join(appsDir, filename), 'utf8'), relative);

  if (!data.name) errors.push(`${relative}: missing name`);
  if (String(data.name ?? '').length > 50) errors.push(`${relative}: name exceeds 50 characters`);

  if (sentenceCount(data.description) !== 1) errors.push(`${relative}: description must be exactly one sentence`);
  checkLength(relative, 'description', data.description, 12, 35);

  if (sentenceCount(data.bestFor) !== 1) errors.push(`${relative}: bestFor must be exactly one sentence`);
  checkLength(relative, 'bestFor', data.bestFor, 8, 24);

  if (!Array.isArray(data.tags) || data.tags.length < 2 || data.tags.length > 6) {
    errors.push(`${relative}: tags must contain 2-6 entries`);
  } else if (new Set(data.tags).size !== data.tags.length) {
    errors.push(`${relative}: tags contain duplicates`);
  }

  if (!data.source) errors.push(`${relative}: missing source`);
  if (!data.homepage) errors.push(`${relative}: missing homepage`);
  else {
    try { new URL(data.homepage); } catch { errors.push(`${relative}: homepage is not a valid URL`); }
  }
}

const issueFiles = await markdownFiles(issuesDir);
const issueNumbers = new Set();
const issueSlugs = new Set();

for (const filename of issueFiles) {
  const relative = `src/content/issues/${filename}`;
  const data = frontmatter(await readFile(path.join(issuesDir, filename), 'utf8'), relative);

  if (issueNumbers.has(data.number)) errors.push(`${relative}: duplicate issue number ${data.number}`);
  issueNumbers.add(data.number);

  if (issueSlugs.has(data.slug)) errors.push(`${relative}: duplicate issue slug ${data.slug}`);
  issueSlugs.add(data.slug);

  if (path.basename(filename, '.md') !== data.slug) {
    errors.push(`${relative}: filename must match slug (${data.slug})`);
  }

  checkLength(relative, 'dek', data.dek, 18, 45);

  if (!Array.isArray(data.sections) || data.sections.length < 1 || data.sections.length > 6) {
    errors.push(`${relative}: sections must contain 1-6 entries`);
    continue;
  }

  const referencedApps = [];
  for (const section of data.sections) {
    if (!Array.isArray(section.apps) || section.apps.length < 1 || section.apps.length > 6) {
      errors.push(`${relative}: each section must reference 1-6 apps`);
      continue;
    }

    for (const appId of section.apps) {
      referencedApps.push(appId);
      if (!appIds.has(appId)) errors.push(`${relative}: unknown app ID "${appId}"`);
    }
  }

  if (data.editorsPick) {
    referencedApps.push(data.editorsPick.app);
    if (!appIds.has(data.editorsPick.app)) {
      errors.push(`${relative}: unknown editor's pick app ID "${data.editorsPick.app}"`);
    }
    checkLength(relative, `editor's pick reason for "${data.editorsPick.app}"`, data.editorsPick.reason, 12, 45);
  }

  const duplicates = referencedApps.filter((id, index) => referencedApps.indexOf(id) !== index);
  for (const duplicate of new Set(duplicates)) {
    errors.push(`${relative}: app ID "${duplicate}" appears more than once`);
  }

  if (!Array.isArray(data.readings) || data.readings.length < 1 || data.readings.length > 5) {
    errors.push(`${relative}: readings must contain 1-5 entries`);
  } else {
    for (const reading of data.readings) {
      if (String(reading.title ?? '').length > 100) errors.push(`${relative}: reading title exceeds 100 characters`);
      checkLength(relative, `reading description for "${reading.title ?? 'untitled'}"`, reading.description, 12, 35);
      try { new URL(reading.url); } catch { errors.push(`${relative}: invalid reading URL for "${reading.title ?? 'untitled'}"`); }
    }
  }

  if (!Array.isArray(data.sourceNotes) || data.sourceNotes.length < 1 || data.sourceNotes.length > 10) {
    errors.push(`${relative}: sourceNotes must contain 1-10 entries`);
  }
}

if (errors.length) {
  console.error(`Content validation failed with ${errors.length} issue${errors.length === 1 ? '' : 's'}:\n`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Content validation passed: ${appFiles.length} apps and ${issueFiles.length} issues.`);
