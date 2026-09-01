# Tag Audit

How App Waypoint audits its app tags. `docs/STYLE_GUIDE.md` section 5 sets the rule;
this file sets the method. Run an audit every four issues, and any time the tag count
grows faster than the catalog.

An audit produces a report for editorial review. It does not change app records on its
own. Approval happens first, in a before/after map.

## 1. Take the census

Tags live in the `tags:` array of each file in `src/content/apps/`. Categories are
derived from those tags by `src/data/categories.ts` and rewritten into each record by
`scripts/sync-app-categories.mjs`. Never hand-edit a `categories:` line.

Three numbers start the audit:

- how many apps carry each tag;
- which tags carry exactly one app;
- which tags map to no category, and which mapped tags now carry no apps.

The last one matters because retiring a tag is what creates a dead map entry, and the
validator does not catch it. `scripts/validate-content.mjs` checks that each record's
categories match its tags. It does not check the reverse.

## 2. Judge each single-app tag

Every tag with one app gets one of four verdicts.

- **Spread.** The tag is sound and other apps qualify. Read each candidate's
  `description` and `bestFor` before proposing it; never match on the app name.
- **Merge.** A near-duplicate of an existing tag, such as a singular beside a plural.
  Retag the app onto the surviving tag and retire the duplicate.
- **Retire.** No second home, and the tag is redundant, vague, too narrow, or a feature
  rather than an identity. A tag that would honestly apply to a dozen apps but is
  applied to one is a feature, not a discovery tag.
- **Keep.** One app, deliberately. See protected tags below.

Prefer durable reader intent over implementation detail. Ask what a reader would type
to find the app, not what the app's release notes list.

Watch for **attribute tags** — tags describing how an app works rather than what it is.
They are the hardest failure to spot, because each individual use looks correct. The
test is consistency: if the tag would honestly apply to a dozen records but sits on two,
it is describing plumbing, and the two records that carry it are arbitrary. `export` and
`icloud` both failed this test. `local` and `open-source` are the deliberate exceptions:
they are attributes too, but they carry real editorial weight for this audience, so they
stay unmapped, are excluded from `getPopularTags`, and are applied to every record that
qualifies rather than to a handful.

## 3. Protected tags

These tags carry a single app on purpose. Do not retire them in a routine audit, and do
not stretch other records onto them to inflate the count. Removing one requires an
explicit editorial decision recorded in the audit report.

| Tag | Sole app | Why it is protected |
| --- | --- | --- |
| `health` | touchgrass | `netlify.toml` redirects the retired `/categories/thrive/` to `/tags/health/`. Retiring the tag turns a live 301 into a 404. |
| `finance` | stockdock | The only tag that states what the app is. Already excluded from `getPopularTags`, so it never crowds discovery surfaces. |
| `maps` | mapos | The only tag that states what the app is. `STYLE_GUIDE.md` cites mapos as the worked example for `iconCategory`; the record is deliberately unusual. |
| `database` | fluentdb | Precise, high reader intent, and an explicit member of Developer Tools. |
| `backup` | superduper | Durable reader intent with an obvious growth path. Backup tools are a standing Mac category. |
| `downloads` | firelink | As above. Do not stretch it onto apps that merely mention downloads as a trigger condition. |
| `ebooks` | tomo | Precise where a broader tag would be vague. Monitor: if still a single app after two audits, consider folding into `reading`. |

A protected tag is not permanent. It is a tag whose single-app status has already been
argued and settled, so a later audit does not relitigate it by default.

## 4. Retired tags

These tags were retired by the 2026-09-01 audit. No app carries them, they are out of
`src/data/categories.ts`, and `netlify.toml` redirects their old routes. Do not add one
to a new app record without an explicit editorial reason recorded in the pull request.
The replacement column is the tag to reach for instead; in most cases the reader intent
is already covered.

| Retired tag | Why | Use instead |
| --- | --- | --- |
| `agent` | A singular duplicate of `agents`, which already existed and mapped to the same category. Two spellings split one idea across two tag pages. | `agents` |
| `library` | Vague. It could mean an ebook library, a bookmark library or a media library, and the app holding it already carried the precise tag. | `ebooks`, `reading`, or `research` |
| `documentation` | One letter from `documents`, which means something else. Two tags that near-collide are a navigation problem, not a taxonomy. | `capture` for workflow-capture tools; `documents` for document handling |
| `export` | A feature, not an identity. Many apps export something; tagging one of them for it describes the release notes, not the app. | Nothing. Tag what the app *is* |
| `cloud` | Vague, and it half-collides with `icloud`. A local-first catalog will not grow it. | `files` |
| `icloud` | Plumbing, not identity, and applied inconsistently: only two records carried it while `finalist` syncs across Mac, iPhone, iPad and Watch, and `hyperduck`, `choclift` and `raindrop` are all cross-device, none of them tagged. Sync is how an app works, not what it is. | Nothing. Tag what the app *is* |

Removing a tag from one record is not retirement. A tag is retired only when no app
carries it and it has been removed from `src/data/categories.ts`. When that happens, add
the Netlify redirect described in section 7 and add a row here.

## 5. Watch the tag budget

`AGENTS.md` sets 3–5 tags per app, hard maximum 6; the schema enforces 2–6. An audit
that adds tags must not quietly spend every record's headroom.

When a record would reach six, name its weakest tag rather than accepting the ceiling.
Rank weakness by:

1. **Reach.** A tag on 45 of 102 apps carries far less discovery signal than one on 4.
   `utility` and `productivity` are the broadest tags in the catalog and are usually the
   weakest thing on any record holding them.
2. **Redundancy.** A tag whose category is already reached by another tag on the same
   record adds a page entry but no category. Dropping it costs nothing structurally.
3. **Accuracy.** A tag that is the *sole* source of a category the app does not really
   belong to is worse than weak; it is wrong, and dropping it corrects the taxonomy.

Check the category effect before dropping. Removing a tag that is the only route to a
category changes that record's category set, which is an editorial decision, not a
cleanup.

## 6. Maintain the category map

`src/data/categories.ts` gives each category a `tags` array. A tag in no array still
works as a tag page; it simply contributes nothing to category derivation. That is
correct for attributes such as `local` and `open-source`, and for apps with no natural
category home.

When retiring a tag, remove it from any category array in the same change. When a
functional tag accumulates several apps and maps nowhere, propose a home for it and
state which records would gain a category.

Category order within a record is derived from the app's own tag order and decides the
fallback mark for an app with no `icon:` and no `iconCategory:`. Before proposing any
change that alters category order, confirm whether the affected records carry icons.

## 7. Redirect what you retire

Retiring a tag removes its `/tags/{tag}/` route. `netlify.toml` already carries 301s for
retired category routes; add one per retired tag in the same change. Point it at the
successor tag where one exists; otherwise at the sole app's detail page, or — when
several records carried the tag — at the strongest tag those records still share.

## 8. Report, then apply

Produce a before/after map covering every affected record and every category-map edit,
and get editorial approval before touching app records. Once approved:

```bash
npm run sync:categories
npm run validate
npm run build
```

`sync:categories` rewrites every `categories:` line from tags, so it runs after both the
app-record edits and the `categories.ts` edits, never between them.
