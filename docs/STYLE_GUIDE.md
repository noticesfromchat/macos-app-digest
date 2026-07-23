# App Waypoint Style & Brand Guide

This document is the design and publishing source of truth for the App Waypoint website. Read it before creating a new issue or changing any page, component, shared asset or content entry.

## 1. Brand direction

The site should feel like a small, premium editorial publication for experienced Mac users.

### Core qualities

- Mac-native
- restrained
- editorial rather than dashboard-like
- highly legible
- technically polished
- calm, useful and slightly playful

## 2. Optional Editor's Pick

- An issue may name zero or one Editor's Pick with the `editorsPick` object.
- The object contains an existing `app` ID from `src/content/apps/` and a concise
  12-45 word `reason` explaining why the app stands out in that issue.
- When the user supplies an app specifically for this feature, use that selection for
  the named issue—or the next issue being prepared if none is named. Do not replace it
  with an agent-selected alternative.
- Reuse an existing app record when one exists. Otherwise, verify the official homepage
  or canonical repository and create one standard app file before referencing it.
- App copy is never duplicated in the issue file.
- The reason should explain a concrete quality, distinctive capability or practical
  workflow value. It should not repeat the description or read like marketing copy.
- The selected app must not also appear in a regular issue section.
- When present, the module renders between Trending and AI & Automation.
- It uses the standard section eyebrow and heading, followed by one full-width card.
- The app description is followed by `Best for`, then the issue-specific “Why it was
  chosen” note, tags and source information.
- Omit the object entirely when the issue has no Editor's Pick.
