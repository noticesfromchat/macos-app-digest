import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const checkedRoots = ['src/content', 'src/pages', 'src/data'];
const checkedExtensions = new Set(['.astro', '.md', '.ts']);
const contentRoot = `src${path.sep}content`;
const oxfordCommaPattern = /\b[\w'’-]+(?:\s+[\w'’-]+)*,\s+[^,\n]+,\s+(?:and|or)\b/i;
/* The Plain Dash Rule. Checked across src/content only: everywhere else the
   dashes are page-title separators and code comments, both of which the rule
   exempts, so checking there would be all false positives. A `title:` line is
   skipped because a quoted external title keeps the source's own punctuation. */
const editorialDashPattern = /[—–]/;
const quotedTitlePattern = /^\s*-?\s*(?:[\w.]+\s+)?title:/;
const errors = [];

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
    const isContent = relative.startsWith(contentRoot);
    const lines = (await readFile(absolute, 'utf8')).split(/\r?\n/);

    lines.forEach((line, index) => {
      if (oxfordCommaPattern.test(line)) {
        errors.push(`${relative}:${index + 1}: avoid Oxford commas in public editorial copy`);
      }

      if (isContent && editorialDashPattern.test(line) && !quotedTitlePattern.test(line)) {
        errors.push(
          `${relative}:${index + 1}: avoid em dashes and en dashes in public editorial copy; use a period, a comma, a colon, parentheses or a plain hyphen`
        );
      }
    });
  }
}

for (const directory of checkedRoots) {
  await walk(path.join(root, directory));
}

if (errors.length) {
  console.error(`Editorial style check failed with ${errors.length} issue${errors.length === 1 ? '' : 's'}:\n`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Editorial style check passed.');
