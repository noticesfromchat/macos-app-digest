# App Waypoint

App Waypoint is a curated weekly publication for experienced macOS users. It highlights high-quality Mac apps, productivity tools, automation utilities, AI software, and selected articles and videos.

Live site: https://appwaypoint.netlify.app/

## Architecture

App Waypoint is built with Astro and deployed by Netlify.

```text
Markdown content
→ Astro content collections and components
→ Static site build
→ Netlify deployment
```

GitHub stores the source repository. Netlify is the production hosting platform. GitHub Pages is deprecated and must not be used.

## Content

- Apps: `src/content/apps/*.md`
- Issues: `src/content/issues/*.md`
- Shared components: `src/components/`
- Shared layouts: `src/layouts/`
- Shared styles: `src/styles/`

Each app exists once. Issues reference app IDs rather than duplicating app data. Astro generates the homepage, issue pages, archive, and tag pages.

## Publishing

Before publishing, read:

- `AGENTS.md`
- `docs/STYLE_GUIDE.md`
- `docs/ISSUE_TEMPLATE.md`

Required checks:

```bash
npm install
npm run validate
npm run build
```

Publishing workflow:

1. Create or reuse app Markdown files.
2. Create one issue Markdown file.
3. Run validation and the Astro build.
4. Commit to a feature branch.
5. Open a pull request.
6. Review the Netlify Deploy Preview.
7. Merge into `main` after approval.
8. Netlify deploys `main` to production automatically.

Do not edit generated HTML or use the retired GitHub Pages workflow.