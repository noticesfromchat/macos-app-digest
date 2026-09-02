/* Derives an Editor's Pick accent from the app's own icon.
 *
 * The pick card in the hero is lit by the featured app's colour, but a raw brand
 * colour cannot be used: across the current picks the dominant hues run from a
 * fully saturated magenta to a near-black brown, so the card would read at a
 * different weight every issue. This normalises the icon's hue to one fixed
 * lightness and chroma in OKLCh, which keeps the app's identity and drops the
 * variance. The result is committed to the app record so an editor can review or
 * override it, the same way icons themselves are reviewed.
 *
 * Usage:
 *   node scripts/extract-icon-accent.mjs                 report every editors-picks app
 *   node scripts/extract-icon-accent.mjs tuna --write    write the value into a record
 *
 * PNG only, 8-bit, non-interlaced. An SVG or an app with no icon needs a hand
 * chosen value; the script says so rather than guessing.
 */
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { inflateSync } from 'node:zlib';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const appsDir = path.join(root, 'src/content/apps');

/* The band every pick is normalised into. Chosen so a pale icon and a near-black
 * icon land at the same visual weight against both themes. */
const ACCENT_LIGHTNESS = 0.62;
const ACCENT_CHROMA = 0.15;

function readPng(buffer) {
  if (buffer.readUInt32BE(0) !== 0x89504e47) throw new Error('not a PNG');
  let offset = 8;
  let header = null;
  let palette = null;
  const idat = [];

  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    const data = buffer.subarray(offset + 8, offset + 8 + length);

    if (type === 'IHDR') {
      header = {
        width: data.readUInt32BE(0),
        height: data.readUInt32BE(4),
        depth: data[8],
        colorType: data[9],
        interlace: data[12]
      };
    } else if (type === 'PLTE') palette = data;
    else if (type === 'IDAT') idat.push(data);
    else if (type === 'IEND') break;

    offset += 12 + length;
  }

  if (!header) throw new Error('missing IHDR');
  if (header.depth !== 8) throw new Error(`unsupported bit depth ${header.depth}`);
  if (header.interlace) throw new Error('interlaced PNG is not supported');

  const channels = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[header.colorType];
  if (!channels) throw new Error(`unsupported colour type ${header.colorType}`);

  const raw = inflateSync(Buffer.concat(idat));
  const stride = header.width * channels;
  const out = Buffer.alloc(header.height * stride);
  let previous = Buffer.alloc(stride);

  for (let y = 0; y < header.height; y += 1) {
    const filter = raw[y * (stride + 1)];
    const line = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1));
    const current = Buffer.alloc(stride);

    for (let x = 0; x < stride; x += 1) {
      const left = x >= channels ? current[x - channels] : 0;
      const up = previous[x];
      const upLeft = x >= channels ? previous[x - channels] : 0;
      let value = line[x];

      if (filter === 1) value += left;
      else if (filter === 2) value += up;
      else if (filter === 3) value += (left + up) >> 1;
      else if (filter === 4) {
        const p = left + up - upLeft;
        const dl = Math.abs(p - left);
        const du = Math.abs(p - up);
        const dul = Math.abs(p - upLeft);
        value += dl <= du && dl <= dul ? left : du <= dul ? up : upLeft;
      }

      current[x] = value & 0xff;
    }

    current.copy(out, y * stride);
    previous = current;
  }

  return { ...header, channels, pixels: out, palette };
}

function samplePixel(image, index) {
  const { channels, pixels, palette, colorType } = image;
  const at = index * channels;

  if (colorType === 3) {
    const entry = pixels[at] * 3;
    return [palette[entry], palette[entry + 1], palette[entry + 2], 255];
  }
  if (colorType === 0) return [pixels[at], pixels[at], pixels[at], 255];
  if (colorType === 4) return [pixels[at], pixels[at], pixels[at], pixels[at + 1]];
  if (colorType === 2) return [pixels[at], pixels[at + 1], pixels[at + 2], 255];
  return [pixels[at], pixels[at + 1], pixels[at + 2], pixels[at + 3]];
}

const toLinear = (v) => {
  const c = v / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};

const fromLinear = (c) => {
  const v = c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055;
  return Math.max(0, Math.min(255, Math.round(v * 255)));
};

function rgbToOklch(r, g, b) {
  const lr = toLinear(r);
  const lg = toLinear(g);
  const lb = toLinear(b);
  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  return { L, C: Math.hypot(A, B), h: (Math.atan2(B, A) * 180) / Math.PI };
}

function oklchToHex(L, C, hDeg) {
  const h = (hDeg * Math.PI) / 180;
  const A = C * Math.cos(h);
  const B = C * Math.sin(h);
  const l = (L + 0.3963377774 * A + 0.2158037573 * B) ** 3;
  const m = (L - 0.1055613458 * A - 0.0638541728 * B) ** 3;
  const s = (L - 0.0894841775 * A - 1.291485548 * B) ** 3;
  const r = fromLinear(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s);
  const g = fromLinear(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s);
  const b = fromLinear(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s);
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}

function dominantHue(image) {
  let best = null;

  for (let i = 0; i < image.width * image.height; i += 1) {
    const [r, g, b, a] = samplePixel(image, i);
    if (a < 128) continue;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    /* Favour colour that reads as the icon's identity over a dark outline or a
       blown-out highlight, both of which carry hue without carrying character. */
    const score = saturation * (1 - Math.abs(luminance - 0.5) * 0.9);
    if (!best || score > best.score) best = { r, g, b, score };
  }

  if (!best || best.score < 0.05) return null;
  return rgbToOklch(best.r, best.g, best.b).h;
}

async function accentFor(appId) {
  const file = path.join(appsDir, `${appId}.md`);
  const source = await readFile(file, 'utf8');
  const icon = source.match(/^icon:\s*(\S+)/m)?.[1];

  if (!icon) return { appId, file, source, skip: 'no icon; the fallback palette already gives this app a colour' };
  if (!icon.endsWith('.png')) return { appId, file, source, skip: `${path.extname(icon)} is not decodable here; choose a value by hand` };

  const image = readPng(await readFile(path.join(root, 'public', icon.replace(/^\//, ''))));
  const hue = dominantHue(image);
  if (hue === null) return { appId, file, source, skip: 'icon carries no usable hue; choose a value by hand' };

  return { appId, file, source, accent: oklchToHex(ACCENT_LIGHTNESS, ACCENT_CHROMA, hue), hue: Math.round((hue + 360) % 360) };
}

const args = process.argv.slice(2);
const write = args.includes('--write');
const named = args.filter((a) => !a.startsWith('--'));

let ids = named;
if (!ids.length) {
  const files = await readdir(appsDir);
  ids = [];
  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const source = await readFile(path.join(appsDir, file), 'utf8');
    if (/^collections:.*editors-picks/m.test(source)) ids.push(file.replace(/\.md$/, ''));
  }
}

for (const id of ids) {
  const result = await accentFor(id);

  if (result.skip) {
    console.log(`${id.padEnd(12)} skipped: ${result.skip}`);
    continue;
  }

  console.log(`${id.padEnd(12)} ${result.accent}  (hue ${result.hue})`);

  if (!write) continue;

  /* iconStyle is omitted when it is the default, so fall back to the icon line. */
  const anchor = /^iconStyle:.*$/m.test(result.source) ? /^(iconStyle:.*)$/m : /^(icon:.*)$/m;
  const next = /^iconAccent:/m.test(result.source)
    ? result.source.replace(/^iconAccent:.*$/m, `iconAccent: "${result.accent}"`)
    : result.source.replace(anchor, `$1\niconAccent: "${result.accent}"`);

  if (next === result.source) {
    const reason = /^iconAccent:/m.test(result.source)
      ? 'already up to date'
      : 'could not place iconAccent; add it by hand';
    console.log(`${' '.repeat(12)} ${reason}`);
    continue;
  }

  await writeFile(result.file, next);
  console.log(`${' '.repeat(12)} written to ${path.relative(root, result.file)}`);
}
