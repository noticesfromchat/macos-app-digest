/* The homepage rows' daily draw, shared by the build and the browser so both reach the same
   three apps for the same UTC day. The build renders its own day's draw so the page is
   whole without JavaScript; the browser redraws for today, so the rows change daily
   without a deploy. Nothing in here may import from astro:content: the browser runs this
   file too. */

export type RowKey = 'trending' | 'recent' | 'favorites' | 'picks';

/* Fill order, which is also claim order: an app taken by an earlier row is skipped by every
   later one, so nothing appears twice on the page. */
export const ROW_ORDER: RowKey[] = ['trending', 'recent', 'favorites', 'picks'];

export type Pools = Record<RowKey, string[]>;

/** The UTC calendar day, so every reader everywhere changes at the same moment. */
export const utcDay = (date = new Date()) => date.toISOString().slice(0, 10);

/* A seeded shuffle: the same seed gives the same order on every machine. */
export const seededShuffle = <T,>(list: T[], seedText: string) => {
  let seed = 0;
  for (const char of seedText) seed = (Math.imul(seed, 31) + char.charCodeAt(0)) | 0;
  const next = () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const out = [...list];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(next() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};

/** Three app IDs per row for the given day, never repeating the pick or each other. */
export const drawRows = (pools: Pools, pickId: string | undefined, day: string) => {
  const shown = new Set(pickId ? [pickId] : []);
  const rows = {} as Record<RowKey, string[]>;
  for (const key of ROW_ORDER) {
    const row = seededShuffle(pools[key].filter((id) => !shown.has(id)), `${day}:${key}`).slice(0, 3);
    row.forEach((id) => shown.add(id));
    rows[key] = row;
  }
  return rows;
};
