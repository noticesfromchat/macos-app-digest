import { getCollection } from 'astro:content';

export async function GET() {
  const apps = (await getCollection('apps'))
    .map((entry) => ({
      id: entry.id,
      name: entry.data.name,
      description: entry.data.description,
      bestFor: entry.data.bestFor,
      categories: entry.data.categories,
      tags: entry.data.tags,
      source: entry.data.source,
      url: `/apps/${entry.id}/`
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return new Response(JSON.stringify(apps), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  });
}
