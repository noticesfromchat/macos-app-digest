import { readFile, writeFile } from "node:fs/promises";

const API_KEY = process.env.OPENAI_API_KEY;
const MODEL = process.env.OPENAI_MODEL || "gpt-5.6-terra";
const ISSUES_PATH = new URL("../content/issues.json", import.meta.url);
const TIME_ZONE = "America/Los_Angeles";

if (!API_KEY) {
  throw new Error("OPENAI_API_KEY is required.");
}

const localDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

const displayDate = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(new Date());

const archive = JSON.parse(await readFile(ISSUES_PATH, "utf8"));

if (archive.issues.some((issue) => issue.id === localDate)) {
  console.log(`Issue ${localDate} already exists. Nothing to do.`);
  process.exit(0);
}

const previousNames = archive.issues
  .slice(0, 8)
  .flatMap((issue) => issue.apps.map((app) => app.name));

const existingNumbers = archive.issues
  .map((issue) => Number.parseInt(issue.number, 10))
  .filter(Number.isFinite);
const nextNumber = String(Math.max(0, ...existingNumbers) + 1).padStart(3, "0");

const itemSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    name: { type: "string" },
    category: { type: "string" },
    tagline: { type: "string" },
    body: {
      type: "array",
      minItems: 1,
      maxItems: 2,
      items: { type: "string" },
    },
    why: { type: "string" },
    caveat: { type: "string" },
    url: { type: "string" },
    linkLabel: { type: "string" },
  },
  required: [
    "name",
    "category",
    "tagline",
    "body",
    "why",
    "caveat",
    "url",
    "linkLabel",
  ],
};

const issueSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    title: { type: "string" },
    dek: { type: "string" },
    readingMinutes: { type: "integer", minimum: 6, maximum: 15 },
    intro: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: { type: "string" },
    },
    apps: {
      type: "array",
      minItems: 10,
      maxItems: 12,
      items: itemSchema,
    },
    closing: { type: "string" },
  },
  required: ["title", "dek", "readingMinutes", "intro", "apps", "closing"],
};

const prompt = `
Create the weekly Mac App Digest for Friday, ${displayDate}.

Research the public web before writing. Focus on developments from the last seven days, while allowing a recently launched indie app if it was newly surfaced by a credible source this week.

Editorial focus:
- macOS apps and utilities
- indie software and developer tools
- consumer gadgets or product launches with a strong Mac connection
- iOS tools only when they materially complement a Mac workflow
- consumer-facing AI tools are allowed; exclude enterprise AI news

Source priorities:
- official developer sites, release notes and App Store listings
- Indie App Catalog, 9to5Mac, MacRumors, Product Hunt and reputable consumer-tech publications
- use the most direct trustworthy URL for every item

Format and tone:
- 10 to 12 numbered-item equivalents, ordered by usefulness and novelty
- concise, neutral-to-encouraging and informally technical
- each item needs one short summary, a specific Why it matters and an honest Caveat
- do not invent prices, availability, features, release dates or URLs
- avoid generic listicles, routine sales and enterprise-only announcements
- do not repeat these recently covered names unless there is a substantial new update: ${previousNames.join(", ") || "none"}
- no Oxford comma

The JSON must match the provided schema. Return only the structured result.
`;

const response = await fetch("https://api.openai.com/v1/responses", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: MODEL,
    input: prompt,
    tools: [{ type: "web_search", search_context_size: "high" }],
    reasoning: { effort: "medium" },
    text: {
      format: {
        type: "json_schema",
        name: "mac_app_digest_issue",
        strict: true,
        schema: issueSchema,
      },
    },
    max_output_tokens: 18000,
    store: false,
  }),
});

const payload = await response.json();

if (!response.ok) {
  throw new Error(`OpenAI API error ${response.status}: ${JSON.stringify(payload)}`);
}

const outputText = (payload.output || [])
  .flatMap((item) => item.content || [])
  .filter((part) => part.type === "output_text")
  .map((part) => part.text)
  .join("");

if (!outputText) {
  throw new Error("The OpenAI response did not contain structured output text.");
}

const generated = JSON.parse(outputText);
const issue = {
  id: localDate,
  number: nextNumber,
  label: "Weekly edition",
  date: displayDate,
  readingMinutes: generated.readingMinutes,
  title: generated.title,
  dek: generated.dek,
  intro: generated.intro,
  apps: generated.apps,
  closing: generated.closing,
};

archive.issues.unshift(issue);
archive.issues = archive.issues.slice(0, 104);

await writeFile(ISSUES_PATH, `${JSON.stringify(archive, null, 2)}\n`);
console.log(`Created issue ${nextNumber} for ${displayDate} with ${issue.apps.length} items.`);
