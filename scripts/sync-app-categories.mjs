import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { getCategoriesForTags } from '../src/data/categories.ts';

const root = process.cwd();
const appsDir = path.join(root, 'src/content/apps');

const appFiles = (await readdir(appsDir))
  .filter((name) => name.endsWith('.md'))
  .sort();

for (const filename of appFiles) {
  const filePath = path.join(appsDir, filename);
  const original = await readFile(filePath, 'utf8');
  const tagsMatch = original.match(/tags:\s*\[([^\]]+)\]/);

  if (!tagsMatch) {
    throw new Error(`${filename}: missing tags array`);
  }

  const tags = tagsMatch[1]
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
  const categories = getCategoriesForTags(tags);

  if (!categories.length) {
    throw new Error(`${filename}: no categories derived from tags`);
  }

  const categoryLine = `categories: [${categories.join(', ')}]`;
  let updated = original;

  if (/^categories:\s*\[[^\]]*\]\s*$/m.test(updated)) {
    updated = updated.replace(/^categories:\s*\[[^\]]*\]\s*$/m, categoryLine);
  } else {
    updated = updated.replace(/^tags:\s*\[[^\]]*\]\s*$/m, `$&\n${categoryLine}`);
  }

  if (updated !== original) {
    await writeFile(filePath, updated);
  }
}

console.log(`Synced categories for ${appFiles.length} apps.`);
