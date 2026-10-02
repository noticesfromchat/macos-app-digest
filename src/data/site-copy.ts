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
  "subscribe.cardBody": "We love [RSS](/tags/rss/) and want to make it easy for you to subscribe. Copy the URL below and paste it into your favorite RSS reader.",
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
  "site.feedDescription": "App Waypoint is a curated weekly guide to useful Mac apps, productivity tools, automation utilities, AI software and worthwhile reading.",
  "site.cardFooter": "New issues published every Friday",
  "explore.dek": "Find Mac apps hand-picked from every issue, by category, collection or tag. New apps are added every Friday.",
  "explore.metaDescription": "Find Mac apps by category, collection or tag: every app we've recommended, filterable and sortable on one page.",
  "explore.socialAlt": "Explore every Mac app App Waypoint has recommended, by category, collection or tag.",
  "explore.cardTitle": "Every app, one page",
  "explore.cardDek": "Browse every Mac app App Waypoint has recommended, by category, collection or tag, filterable and sortable in one place.",
  "archive.dek": "Every issue published so far, newest first, back to where it started.",
  "archive.noResults": "No issue matches that search. Every issue is still here; try an app name or something.",
  "archive.originHeading": "Where it all started",
  "archive.originBody": "{issue} went out on {date}. Every Friday since has been filled with great apps.",
  "archive.emptyHeading": "The first issue is on its way",
  "archive.emptyBody": "App Waypoint publishes every Friday. Nothing is in the archive yet, and this page fills in as issues go out.",
  "archive.metaDescription": "Browse every issue of App Waypoint, a weekly editorial guide to thoughtfully selected Mac apps, automation tools, AI software and Mac-focused reading.",
  "archive.socialAlt": "Every published issue of App Waypoint.",
  "archive.cardTitle": "Every issue so far",
  "archive.cardDek": "Browse every published issue of App Waypoint, a weekly editorial guide to thoughtfully selected Mac apps and reading.",
  "about.dek": "I love Mac apps. I like trying them out, tinkering and using them to help me be more productive. To help me organize. To make my everyday tasks as a communicator, manager and leader that much more enjoyable to do.",
  "about.intro": "Hey, I'm Zac. The editor.\n\nApp Waypoint is a little project I've been working on that highlights apps every Friday while building up a [database](/explore/) that is browsable, filterable and sortable. My goal with this project is to help you find that one app that you feel like has been missing.",
  "about.criteriaHeading": "What earns a spot",
  "about.criteriaIntro": "Five things I'm looking for when selecting apps:",
  "about.criteria": "**It's actually useful**\n**People are actually recommending it**\n**It's well made**\n**It's actively being developed or maintained**\n**It has a point of view**",
  "about.sourcesHeading": "Where I look",
  "about.sources": "Developer releases, community threads (Reddit, X), other publications (like [Product Hunt](https://www.producthunt.com/) or [MacStories](https://www.macstories.net/)), podcasts and videos from YouTube.",
  "about.aiHeading": "How I use AI",
  "about.ai": "This site exists because AI helped me build it. The code, the layout, all the fiddly parts. I just pop wireframes I think up into Claude Code or Codex from [Excalidraw](https://excalidraw.com/). This website simply would not exist without it.\n\nFor the issues, AI (Codex, Grok) helps me research: turning up candidates, checking facts, comparing things, catching me repeating myself. It doesn't pick the apps. It sends me a list and I prune, curate and add to it throughout the week.",
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
  "privacy.dek": "**TL;DR:** App Waypoint has no accounts, ads or cookies and uses Plausible's cookie-free analytics to count visits without identifying you.",
  "privacy.body": "App Waypoint is a weekly publication about Mac software at [appwaypoint.app](https://appwaypoint.app/).\n\nYou can read the site without creating an account or giving your name or email address. There are no accounts, sign-up forms or ads. We use Plausible analytics to understand how the site is used, without analytics cookies.\n\n## Website analytics\n\nPlausible gives us statistics about visits, pages viewed, referral sources, browser and device types and approximate locations. It also counts clicks on links that leave the site (such as a link to an app's homepage) and records which link was followed. We use these statistics to understand what readers find useful and to improve the site and what we choose to feature.\n\nPlausible does not use cookies or persistent visitor identifiers. It processes an IP address and browser information to produce a daily identifier specific to this website, but does not store the raw IP address or raw browser user-agent string. It does not track visitors across websites, devices or days. Plausible stores event and session records and presents aggregate statistics to us.\n\nOur analytics requests pass through App Waypoint's domain to Plausible. Plausible is an EU-based service and stores analytics data in the EU. See [Plausible's data policy](https://plausible.io/data-policy) for more information.\n\n## Cookies and saved preferences\n\nApp Waypoint does not set cookies. Its pages load fonts, images and scripts from App Waypoint's own domain rather than from third parties. Videos and articles we recommend are links, not embedded players. If you choose a light or dark appearance, the site saves that preference in your browser's local storage so it can remember your choice. This preference is not used to identify you or track your browsing.\n\nYou can remove the saved preference by clearing App Waypoint's site data in your browser. It otherwise remains until you or your browser remove it.\n\n## Hosting and technical information\n\nNetlify hosts App Waypoint and delivers its pages. Serving the website involves processing technical information such as your IP address, the requested address and browser request information. Netlify may retain technical logs to operate, secure and troubleshoot its services.\n\nNetlify also measures how quickly pages load and respond. A small script served from App Waypoint's own domain sends performance measurements, such as load times and Core Web Vitals, to Netlify along with the page address and basic browser and device details. The script sets no cookies. We use the figures to find slow pages, not to identify visitors.\n\nThe same applies when a feed reader requests App Waypoint's RSS feed. This hosting activity is separate from Plausible's analytics. Using analytics without cookies does not mean that no technical information is processed when you visit. More information is available in [Netlify's privacy statement](https://www.netlify.com/privacy/).\n\n## Service providers and disclosure\n\nWe use service providers to host the site, provide analytics and handle correspondence. They process information as needed to provide those services. We do not sell personal information or use it for targeted advertising.\n\nWe may disclose information where required by law or where necessary to protect the site, our rights or other people.\n\n## How long information is kept\n\nYour appearance preference stays in your browser as described above. Hosting records and analytics records are retained according to the applicable service settings and provider terms.\n\n## Links to other websites\n\nApp Waypoint links to app developers, publications, videos and other services. When you follow a link, the destination's privacy policy applies. Those websites may use cookies or collect information under their own policies.\n\n## Social media\n\nApp Waypoint posts on X and Bluesky. If you follow, reply to or message App Waypoint there, the platform's own privacy policy applies to that activity.\n\n## Your choices and questions\n\nYou can clear your saved appearance preference through your browser's site-data settings.\n\nWe cannot normally identify your visits in the aggregate analytics shown to us, so we usually cannot find or delete records about a particular visit.\n\n## Changes to this policy\n\nWe will update this page if our practices change.",
  "privacy.metaDescription": "How App Waypoint handles your data. There are no accounts, ads or cookies, only cookie-free Plausible analytics that count visits without identifying you.",
};

export type SiteCopyKey = keyof typeof siteCopy;
