# Mac App Digest

A clean, responsive home for the latest weekly macOS app digest and its archive.

## Publishing a new issue

1. Open `content/issues.json`.
2. Add the new issue at the beginning of the `issues` array.
3. Keep its `id` unique, ideally in `YYYY-MM-DD` format.
4. Commit the change to `main`.

The first entry becomes the home page automatically. Every issue also gets a permanent link in the form `?issue=YYYY-MM-DD`.

## Preview locally

The site loads its content with JavaScript, so preview it through a local web server rather than opening `index.html` directly.

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Hosting

The included GitHub Actions workflow publishes the repository through GitHub Pages after changes reach `main`.
