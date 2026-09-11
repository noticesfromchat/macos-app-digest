import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { parse } from 'yaml';
import { scoreRelatedApps } from '../src/data/related-apps.ts';

const appIds = process.argv.slice(2);
const appsDir = path.join(process.cwd(), 'src/content/apps');

const appFiles = (await readdir(appsDir))
  .filter((name) => name.endsWith('.md'))
  .sort();

const apps = await Promise.all(appFiles.map(async (filename) => {
  const text = await readFile(path.join(appsDir, filename), 'utf8');
  const match = text.match(/^---\s*\n([\s\S]*?)\n---(?:\s*\n|$)/);
  if (!match) throw new Error(`${filename}: missing YAML frontmatter`);

  return {
    id: path.basename(filename, '.md'),
    data: parse(match[1])
  };
}));

const idsToAudit = appIds.length
  ? appIds
  : ['diskpeek', 'deepcleanmac', 'bettertouchtool', 'alfred', 'hazel', 'maccy'];

for (const appId of idsToAudit) {
  const app = apps.find((entry) => entry.id === appId);
  if (!app) {
    console.warn(`${appId}: no app record found`);
    continue;
  }

  console.log(`\n${app.data.name} (${app.id})`);
  console.table(
    scoreRelatedApps(app, apps).slice(0, 8).map((result) => ({
      name: result.entry.data.name,
      score: result.score,
      tags: result.sharedTags.join(', '),
      categories: result.sharedCategories.join(', '),
      collections: result.sharedCollections.join(', ')
    }))
  );
}
