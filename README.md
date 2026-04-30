# Q-nomy AI Portal

The central hub for all Q-nomy AI content — a fast, dependency-free static web portal.

![Static Site](https://img.shields.io/badge/static-site-brightgreen) ![No Dependencies](https://img.shields.io/badge/dependencies-0-blue) ![Vanilla JS](https://img.shields.io/badge/vanilla-JS-yellow)

---

## Overview

Q-nomy AI Portal is a multi-section, single-page application serving as the home for everything Q-nomy AI. It includes a curated weekly AI news brief, an AI projects showcase, a skills repository, and a model comparison tool — all in a clean, dark-themed layout with bilingual (EN/HE) support. No backend, no build step, zero external dependencies.

---

## Features

- **Tab-based navigation** across four portal sections
- **Weekly Brief** — collapsible news cards with category filter, bilingual (EN/HE) support, and archive of past editions
- **AI Projects** — showcase of Q-nomy AI initiatives *(coming soon)*
- **Skills Repo** — reusable AI skills catalog *(coming soon)*
- **Model Comparison** — side-by-side LLM comparison tool *(coming soon)*
- Dark theme with CSS variable-based theming
- Fully accessible (ARIA roles, keyboard navigation, tab panel pattern)
- Bilingual display: English and Hebrew via `data-en` / `data-he` attributes

---

## Project Structure

```
├── index.html          # Page structure, tab panels, and script loading
├── js/
│   ├── news.js         # ← Edit this to add/update articles and archive weeks
│   └── app.js          # DOM rendering, tab switching, language toggle, interaction logic
├── css/
│   └── styles.css      # All theming (CSS variables, grid, animations)
└── assets/
    ├── qnomyailogo_transparent.png
    └── qnomyai_comingsoon.png
```

---

## Adding News This Week

Edit `js/news.js` and add an object to the `NEWS_ITEMS` array. Fields support bilingual strings:

```js
{
  title:       { en: "Article Title",   he: "כותרת המאמר" },
  description: { en: "One or two sentence summary.", he: "תיאור קצר." },
  category:    { en: "Research",         he: "מחקר" },   // any string — drives badge color
  date: "Apr 28, 2026",
  source: "Source Name",
  url: "https://example.com"   // optional
}
```

Plain strings are also accepted (no bilingual support needed).

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
