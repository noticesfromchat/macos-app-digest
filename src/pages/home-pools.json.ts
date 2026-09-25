import { homePools } from '../data/home-pools';

/* The homepage rows' candidate pools and the card data for every candidate, so the browser
   can redraw the rows for the reader's UTC day without a rebuild. Rebuilt with the site each
   Friday; small (about 6 KB compressed) and fetched only when the reader nears the rows. */
export async function GET() {
  return new Response(JSON.stringify(await homePools()), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
}
