# Q-nomy AI Weekly Brief

A curated, weekly AI news digest — delivered as a fast, dependency-free static web app.

![Static Site](https://img.shields.io/badge/static-site-brightgreen) ![No Dependencies](https://img.shields.io/badge/dependencies-0-blue) ![Vanilla JS](https://img.shields.io/badge/vanilla-JS-yellow)

---

## Overview

Q-nomy AI Weekly Brief is a handcrafted news aggregation page that presents AI industry highlights — breakthroughs, research, and regulatory updates — in a clean, dark-themed card layout. It requires no backend, no build step, and has zero external dependencies.

---

## Features

- Collapsible news cards with smooth animations
- Categorized article badges (color-coded by category)
- Expandable archive of past weekly editions
- Dark theme with CSS variable-based theming
- Fully accessible (ARIA roles, keyboard navigation)
- Canvas-based logo processing for dark background compatibility

---

## Project Structure

```
├── index.html          # Page structure and script loading
├── js/
│   ├── news.js         # ← Edit this to add/update articles
│   ├── app.js          # DOM rendering and interaction logic
│   └── logo-dewhite.js # Runtime logo transparency utility
├── css/
│   └── styles.css      # All theming (CSS variables, grid, animations)
└── assets/
    └── qnomyailogo_transparent.png
```

---

## Adding News This Week

Edit `js/news.js` and add an object to the `NEWS_ITEMS` array:

```js
{
  title: "Article Title",
  description: "One or two sentence summary.",
  category: "Research",        // any string — drives badge color
  date: "Apr 28, 2026",
  source: "Source Name",
  url: "https://example.com"   // optional
}
```

## Archiving the Current Week

At the start of each new week, move the contents of `NEWS_ITEMS` into `ARCHIVE_WEEKS`:

```js
ARCHIVE_WEEKS.unshift({
  week: "Week of Apr 21, 2026",
  items: [ /* paste previous NEWS_ITEMS here */ ]
});
```

Then clear `NEWS_ITEMS` and start fresh.

---

## Running Locally

A local HTTP server is required (canvas pixel processing in `logo-dewhite.js` is blocked by `file://` CORS restrictions):

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

Or press **F5** in VS Code — the pre-configured launch config starts Chrome against localhost.

---

## Customization

| What | Where |
|------|-------|
| Accent color | `--orange` in `css/styles.css` `:root` |
| Background | `--bg-base`, `--bg-card` in `css/styles.css` `:root` |
| Card template | `buildCard()` in `js/app.js` |
| Page structure | `index.html` |

---

## Deployment

Drop the entire project folder on any static host — no build step needed:

- [Netlify](https://netlify.com) — drag and drop
- [Vercel](https://vercel.com) — `vercel --prod`
- [GitHub Pages](https://pages.github.com) — push to `main`, enable Pages
- AWS S3 static website hosting

---

## Security Note

All user-facing text is HTML-escaped via `escHtml()` in `app.js` before DOM insertion, preventing XSS if data sources are ever extended.

---

*© Q-nomy AI. All rights reserved.*
