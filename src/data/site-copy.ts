/**
 * Site-wide reader copy that belongs to no app, issue or lane record: the subscribe
 * offer, the taglines, the page introductions, the About page and the lines search
 * results and social cards carry. It used to be written straight into the templates,
 * which left the local catalogue editor able to reach every record but not the words
 * around them. The editor's Misc tab writes this map; every template reads from it.
 *
 * One entry per line, written as JSON strings, because the editor edits the file with
 * an anchored pattern rather than rewriting the module (the same contract as
 * `lanes.ts`). A value may carry two inline marks, rendered by `rich-text.ts`:
 * `[label](/path/)` for a link and `**words**` for bold. Multi-paragraph values
 * separate paragraphs with a blank line (`\n\n`); a paragraph that is bold from end to
 * end renders as the About page's emphasis line. `{issue}` and `{date}` in
 * `archive.originBody` are filled with the first issue's name and date.
 *
 * Page titles, headings that name a page (Issues, Explore Apps, About) and interface
 * labels (buttons, filters, navigation) stay in the templates: they are structure that
 * other pages, breadcrumbs and routes agree with, not prose. The homepage is the one
 * exception. Its row headings, labels and buttons are the page's editorial voice and change
 * with it, so they live here under `home.*` and the editor's Home tab writes them.
 */
export const siteCopy = {
  "subscribe.dialogKicker": "Subscribe",
  "subscribe.dialogTitle": "App Waypoint RSS feed",
  "subscribe.dialogBody": "We love [RSS](/tags/rss/) and want to make it easy for you to subscribe. Copy the URL below and paste it into your favorite RSS reader.",
  "subscribe.cardHeading": "Apps delivered every Friday",
  "subscribe.cardBody": "We love [RSS](/tags/rss/) and want to make it easy for you to subscribe. Copy the URL and paste it into your favorite RSS reader.",
  "home.heroLine1": "Find your next favorite Mac app.",
  "home.heroLine2": "New issues filled with hand-picked apps every Friday.",
  "home.latestButton": "Latest Issue",
  "home.exploreButton": "Explore Apps",
  "home.currentLabel": "Current issue",
  "home.pickLabel": "This Week's Editor's Pick",
  "home.readIssue": "Read Issue",
  "home.trendingLabel": "Trending",
  "home.trendingHeading": "What Mac users are talking about",
  "home.recentLabel": "Recently featured",
  "home.recentHeading": "In case you missed them",
  "home.recentLink": "Recently Featured Apps",
  "home.favoritesLabel": "Favorites from the community",
  "home.favoritesHeading": "Favorites for good reason",
  "home.favoritesLink": "Community Favorite Apps",
  "home.picksLabel": "Editor's Picks",
  "home.picksHeading": "Top of the list, week after week",
  "home.picksLink": "Editor's Picks",
  "home.exploreLabel": "Keep Exploring",
  "home.exploreHeading": "Chart your own course",
  "home.catalogTitle": "Explore the catalog",
  "home.catalogButton": "Explore Apps",
  "home.archiveTitle": "Browse the issue archive",
  "home.archiveButton": "View All Issues",
  "issue.heroLine1": "Your weekly guide to Mac apps.",
  "issue.heroLine2": "New issues published every Friday.",
  "issue.label": "In This Issue",
  "home.titleTagline": "New and Notable Mac Apps Every Friday",
  "home.socialAlt": "App Waypoint: a weekly guide to Mac apps. New issues published every Friday.",
  "home.cardDek": "A weekly guide to Mac apps. New issues published every Friday.",
  "footer.tagline": "Your weekly guide to Mac apps.",
  "site.description": "Find Mac apps worth keeping. Every Friday, App Waypoint hand-picks new and popular Mac apps and adds them to a searchable catalog.",
  "site.socialAlt": "App Waypoint, a weekly guide to curated Mac apps for experienced users.",
  "site.feedDescription": "App Waypoint is a curated weekly guide to exceptional Mac apps, productivity tools, automation utilities, AI software and worthwhile reading.",
  "site.cardFooter": "New issues published every Friday",
  "explore.dek": "Find Mac apps hand-picked from every issue, by category, collection or tag. New apps are added every Friday.",
  "explore.metaDescription": "Find Mac apps by category, collection or tag: every app App Waypoint has recommended, filterable and sortable on one page.",
  "explore.socialAlt": "Explore every Mac app App Waypoint has recommended, by category, collection or tag.",
  "explore.cardTitle": "Every app, one page",
  "explore.cardDek": "Browse every Mac app App Waypoint has recommended, by category, collection or tag, filterable and sortable in one place.",
  "archive.dek": "Every issue published so far, newest first, back to where it started.",
  "archive.noResults": "No issue matches that search. Every issue is still here; try an app name, a topic or an issue number.",
  "archive.originHeading": "Where it started",
  "archive.originBody": "{issue} went out on {date}. Every Friday since has been filled with great apps.",
  "archive.emptyHeading": "The first issue is on its way",
  "archive.emptyBody": "App Waypoint publishes every Friday. Nothing is in the archive yet, and this page fills in as issues go out.",
  "archive.metaDescription": "Browse every issue of App Waypoint, a weekly editorial guide to thoughtfully selected Mac apps, automation tools, AI software and Mac-focused reading.",
  "archive.socialAlt": "Every published issue of App Waypoint.",
  "archive.cardTitle": "Every issue so far",
  "archive.cardDek": "Browse every published issue of App Waypoint, a weekly editorial guide to thoughtfully selected Mac apps and reading.",
  "about.dek": "I love Mac apps. I like trying them out, tinkering and using them to help me be more productive. To help me organize. To make my everyday tasks as a communicator, manager and leader that much more enjoyable to do.",
  "about.intro": "Hey, I'm Zac. The editor.\n\nApp Waypoint is a little project I've been working on that highlights apps every Friday while building up a [database](/explore/) that is browsable, filterable and sortable. My goal with this project is to help you find that one tool or utility that solves actual problems and reduces friction or pain points. And to share a couple of things I think are worth reading or watching.",
  "about.criteriaHeading": "What earns a spot",
  "about.criteriaIntro": "Five things I'm looking for when selecting apps:",
  "about.criteria": "**It's actually useful.** Not clever for its own sake. It fixes something you've been putting up with\n**People are actually recommending it.** Not marketing, someone bothered to tell someone else or shared enthusiasm about it\n**It's well made.** Somebody cared about how it feels to use. I think that's important\n**It's alive.** Still being updated by someone paying attention\n**It has a point of view.** If three apps do the same job, I want the one that does it differently",
  "about.sourcesHeading": "Where I look",
  "about.sources": "Developer releases, community threads (Reddit, X), other publications (like [Product Hunt](https://www.producthunt.com/) or [MacStories](https://www.macstories.net/)), podcasts and videos from YouTube.",
  "about.aiHeading": "How I use AI",
  "about.ai": "This site exists because AI helped me build it. The code, the layout, all the fiddly parts. I just pop wireframes I think up into Claude Code or Codex from [Freeform](https://apps.apple.com/us/app/freeform/id6443742539) or [Excalidraw](https://excalidraw.com/) ([there's an awesome Obsidian plugin for it by the way](https://github.com/zsviczian/obsidian-excalidraw-plugin)). This website simply would not exist without it.\n\nFor the issues, AI helps me research: turning up candidates, checking facts, comparing things, catching me repeating myself. It doesn't pick the apps. It sends me a list and I prune, curate and add to it throughout the week. [Editor's Picks](/collections/editors-picks/) and [Community Favorites](/collections/community-favorites/) are purely up to me.",
  "about.supportHeading": "What do I get out of all of this?",
  "about.support": "I get to share my passion for finding new apps with you. And to support hard working developers and hopefully help shine a light on their apps that helps them keep going. That's it.\n\nNobody pays to be here. If a promoted app ever appears, it will be marked as such.\n\n**Thank you for reading. For clicking the link that led you here and for spending a little time with me and my project.**",
  "about.ctaLabel": "Check out the latest issue",
  "about.metaDescription": "Zac, the editor of App Waypoint, on what earns an app a place in the Friday issue, where he looks and how AI is used.",
  "about.socialAlt": "About App Waypoint: curated one app at a time.",
  "about.cardTitle": "Curated one app at a time",
  "about.cardDek": "A weekly editorial publication for experienced Mac users. AI helps with the research; the selections, the emphasis and the recommendations stay human-led.",
  "notFound.dek": "Try searching the catalog or use one of the links below.",
  "notFound.searchTitle": "Search the Catalog",
  "notFound.searchBody": "Find an app, tag or collection directly.",
  "notFound.exploreTitle": "Explore Apps",
  "notFound.exploreBody": "Browse the app catalog consisting of every app featured from every issue to date.",
  "notFound.archiveTitle": "View All Issues",
  "notFound.archiveBody": "Browse every published issue of App Waypoint.",
  "notFound.aboutTitle": "Learn About App Waypoint",
  "notFound.aboutBody": "How issues are researched, chosen and published.",
  "notFound.metaDescription": "That page is not here. Search the catalog, or use the links to Explore, Issues and About.",
  "notFound.socialAlt": "Page not found on App Waypoint.",
  "notFound.cardDek": "That page is not here. Explore the catalog, browse the archive or search from any page on the site.",
};

export type SiteCopyKey = keyof typeof siteCopy;
