# App Waypoint Agent Instructions

App Waypoint is a curated weekly publication for experienced macOS users. It highlights high-quality Mac apps, productivity tools, automation utilities, AI software, and selected articles and videos.

It is an editorial publication, not a generic app directory. The publishing agent is trusted to research, select, write, validate, and publish each issue autonomously.

## Required reading

Before publishing or changing the site, read:

- `docs/STYLE_GUIDE.md`
- `docs/ISSUE_TEMPLATE.md`
- `docs/PUBLISHING.md`

## Canonical architecture

App Waypoint is built with Astro and deployed by Netlify.

```text
Markdown content
→ Astro Content Collections and shared components
→ static build
→ Netlify production deployment
```