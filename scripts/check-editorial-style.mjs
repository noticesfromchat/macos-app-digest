import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const checkedRoots = ['src/content', 'src/pages', 'src/data'];
const checkedExtensions = new Set(['.astro', '.md', '.ts']);
const oxfordCommaPattern = /\b[\w'’-]+(?:\s+[\w'’-]+)*,\s+[^,\n]+,\s+(?:and|or)\b/i;
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
    const lines = (await readFile(absolute, 'utf8')).split(/\r?\n/);

    lines.forEach((line, index) => {
      if (oxfordCommaPattern.test(line)) {
        errors.push(`${relative}:${index + 1}: avoid Oxford commas in public editorial copy`);
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
