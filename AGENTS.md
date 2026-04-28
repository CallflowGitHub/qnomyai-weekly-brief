# Q-nomy AI Weekly Brief — Agent Instructions

Static vanilla JS/HTML/CSS site. No build step, no framework, no dependencies, no backend.

## Architecture

| File | Role |
|------|------|
| [js/news.js](js/news.js) | **Data layer** — edit this to add/update articles. Defines `NEWS_ITEMS` (current week) and `ARCHIVE_WEEKS` (history). |
| [js/app.js](js/app.js) | **App logic** — renders all cards/sections into DOM, handles toggle interactions, date display. |
| [css/styles.css](css/styles.css) | **Theming** — all colors as CSS variables (`:root`), responsive grid, dark theme. |
| [index.html](index.html) | **Structure** — sticky header, hero, news grid, archive, footer. Script load order matters. |
| [js/logo-dewhite.js](js/logo-dewhite.js) | **Logo utility** — canvas-based white-pixel removal at runtime for dark-background compatibility. |
| [assets/](assets/) | **Images** — logo PNG files referenced in header and footer. |

**Script load order** (must be preserved):
```html
<script src="js/news.js"></script>   <!-- defines NEWS_ITEMS, ARCHIVE_WEEKS globals -->
<script src="js/app.js"></script>    <!-- consumes those globals -->
<script src="js/logo-dewhite.js"></script>
```

## Common Tasks

**Add a news item**: Push an object to `NEWS_ITEMS` in [js/news.js](js/news.js):
```js
{ title: "...", description: "...", category: "Research", date: "Apr 28, 2026", source: "Source Name", url: "https://..." }
```
`url` is optional. `category` drives the badge color (no enum — any string works).

**Move current items to archive**: Move `NEWS_ITEMS` contents into a new entry in `ARCHIVE_WEEKS` in [js/news.js](js/news.js):
```js
{ week: "Week of Apr 21, 2026", items: [ /* moved items */ ] }
```

**Change colors**: Modify CSS variables in `:root` in [css/styles.css](css/styles.css). Key vars: `--orange` (`#ff6a00`), `--bg-base`, `--bg-card`.

**Modify card layout/template**: Edit `buildCard()` in [js/app.js](js/app.js).

## Conventions

- **HTML safety**: Always use `escHtml()` (defined in [js/app.js](js/app.js)) when inserting text into DOM. Never bypass this.
- **Interactivity state**: `aria-expanded="true|false"` on buttons is the source of truth for toggle state — check/set this, not a separate variable.
- **Collapse animation**: Add/remove `.collapsed` CSS class to show/hide sections. Do not use `display:none` or inline styles.
- **Scope isolation**: Both [js/app.js](js/app.js) and [js/logo-dewhite.js](js/logo-dewhite.js) use IIFE `(function(){ ... })()` — maintain this pattern in new scripts.
- **No globals**: Do not add properties to `window` or declare globals, except for the `NEWS_ITEMS`/`ARCHIVE_WEEKS` data contract between [news.js](news.js) and [app.js](app.js).

## Running Locally

Requires an HTTP server (not `file://`) due to canvas CORS restrictions in [js/logo-dewhite.js](js/logo-dewhite.js):
```bash
python -m http.server 8000
# or
npx http-server
```
VS Code `launch.json` is pre-configured — press **F5** to launch Chrome.

## Deployment

Drop all files on any static host (Netlify, Vercel, GitHub Pages, S3). No build step needed.
