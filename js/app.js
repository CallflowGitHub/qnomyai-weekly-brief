// ── APP LOGIC ──

(function () {
  // ── TAB SWITCHING ──
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  let currentLang = 'en';

  function activateTab(selectedTab) {
    tabs.forEach(function (tab) {
      const isSelected = tab === selectedTab;
      tab.setAttribute('aria-selected', String(isSelected));
      tab.setAttribute('tabindex', isSelected ? '0' : '-1');
      tab.classList.toggle('tab-btn--active', isSelected);
    });
    panels.forEach(function (panel) {
      panel.classList.toggle('tab-panel--hidden', panel.id !== selectedTab.getAttribute('aria-controls'));
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () { activateTab(tab); });
    tab.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const dir = e.key === 'ArrowRight' ? 1 : -1;
        const tabArr = Array.from(tabs);
        const next = tabArr[(tabArr.indexOf(tab) + dir + tabArr.length) % tabArr.length];
        activateTab(next);
        next.focus();
      }
    });
  });

  // Set edition date in header
  const now = new Date();
  const opts = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('edition-date').textContent =
    now.toLocaleDateString('en-US', opts);

  // Footer year
  document.getElementById('footer-year').textContent = now.getFullYear();

  // Article count
  const articleCountEl = document.getElementById('article-count');
  const n = NEWS_ITEMS.length;
  articleCountEl.dataset.en = n + ' article' + (n !== 1 ? 's' : '');
  articleCountEl.dataset.he = n + ' \u05de\u05d0\u05de\u05e8\u05d9\u05dd';
  articleCountEl.textContent = articleCountEl.dataset.en;

  // Collapse toggle
  const titleBtn = document.getElementById('section-title-btn');
  const grid = document.getElementById('news-grid');

  let mainFilterBar = null;

  const mainEl = document.querySelector('main');

  function toggleGrid() {
    const expanded = titleBtn.getAttribute('aria-expanded') === 'true';
    titleBtn.setAttribute('aria-expanded', String(!expanded));
    grid.classList.toggle('collapsed', expanded);
    if (mainFilterBar) mainFilterBar.classList.toggle('collapsed', expanded);
    mainEl.classList.toggle('grid-collapsed', expanded);
  }

  titleBtn.addEventListener('click', toggleGrid);
  titleBtn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleGrid(); }
  });

  // Render current week cards
  NEWS_ITEMS.forEach(function (item) {
    grid.appendChild(buildCard(item));
  });

  mainFilterBar = buildFilterBar(NEWS_ITEMS, grid);
  if (mainFilterBar) grid.parentNode.insertBefore(mainFilterBar, grid);

  function buildCard(item) {
    const enTitle = typeof item.title === 'object' ? item.title.en : item.title;
    const heTitle = typeof item.title === 'object' ? item.title.he : item.title;
    const enDesc  = typeof item.description === 'object' ? item.description.en : item.description;
    const heDesc  = typeof item.description === 'object' ? item.description.he : item.description;
    const enCat   = typeof item.category === 'object' ? item.category.en : item.category;
    const heCat   = typeof item.category === 'object' ? item.category.he : item.category;

    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.category = enCat;

    const dTitle = currentLang === 'he' ? heTitle : enTitle;
    const dDesc  = currentLang === 'he' ? heDesc  : enDesc;
    const dCat   = currentLang === 'he' ? heCat   : enCat;
    const dMore  = currentLang === 'he' ? '\u05E7\u05E8\u05D0 \u05E2\u05D5\u05D3' : 'Read more';

    const linkHtml = item.url
      ? `<a class="card-link" href="${escHtml(item.url)}" target="_blank" rel="noopener noreferrer">Read more</a>`
      : '';

    card.innerHTML = `
      <div class="card-top">
        <span class="card-category">${escHtml(dCat)}</span>
      </div>
      <h3 class="card-title">${escHtml(dTitle)}</h3>
      <div class="card-desc-wrap">
        <p class="card-description">${escHtml(dDesc)}</p>
        <div class="card-desc-fade"></div>
      </div>
      <button class="card-expand-btn" aria-expanded="false" type="button">
        <span class="expand-label">${escHtml(dMore)}</span>
        <span class="expand-icon">&#43;</span>
      </button>
      <div class="card-footer">
        <span class="card-source">${escHtml(item.source)}</span>
        ${linkHtml}
      </div>
    `;

    // Set translation data attributes for language switching
    const catEl = card.querySelector('.card-category');
    catEl.dataset.en = enCat;
    catEl.dataset.he = heCat;

    const titleEl = card.querySelector('.card-title');
    titleEl.dataset.en = enTitle;
    titleEl.dataset.he = heTitle;

    const descEl = card.querySelector('.card-description');
    descEl.dataset.en = enDesc;
    descEl.dataset.he = heDesc;

    const wrap   = card.querySelector('.card-desc-wrap');
    const fade   = card.querySelector('.card-desc-fade');
    const btn    = card.querySelector('.card-expand-btn');
    const label  = card.querySelector('.expand-label');
    const icon   = card.querySelector('.expand-icon');
    const desc   = card.querySelector('.card-description');

    function toggleExpand() {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        wrap.classList.remove('expanded');
        fade.style.display = '';
        btn.setAttribute('aria-expanded', 'false');
        label.textContent = currentLang === 'he' ? '\u05E7\u05E8\u05D0 \u05E2\u05D5\u05D3' : 'Read more';
        icon.innerHTML = '&#43;';
        card.classList.remove('card-open');
      } else {
        wrap.classList.add('expanded');
        fade.style.display = 'none';
        btn.setAttribute('aria-expanded', 'true');
        label.textContent = currentLang === 'he' ? '\u05D4\u05E6\u05D2 \u05E4\u05D7\u05D5\u05EA' : 'Show less';
        icon.innerHTML = '&#8722;';
        card.classList.add('card-open');
      }
    }

    btn.addEventListener('click', toggleExpand);
    desc.addEventListener('click', toggleExpand);

    return card;
  }

  function buildFilterBar(items, grid) {
    const catMap = {}; // en -> he
    const counts = {};
    items.forEach(function (i) {
      const en = typeof i.category === 'object' ? i.category.en : i.category;
      const he = typeof i.category === 'object' ? i.category.he : i.category;
      catMap[en] = he;
      counts[en] = (counts[en] || 0) + 1;
    });
    const enCats = [...new Set(items.map(function (i) {
      return typeof i.category === 'object' ? i.category.en : i.category;
    }))];
    if (enCats.length < 2) return null;

    const bar = document.createElement('div');
    bar.className = 'filter-bar';

    function makePill(enLabel, isAll) {
      const btn = document.createElement('button');
      btn.className = 'filter-pill' + (isAll ? ' filter-pill--active' : '');
      btn.type = 'button';
      btn.setAttribute('dir', 'auto');
      const enText = isAll ? 'All (' + items.length + ')' : enLabel + ' (' + counts[enLabel] + ')';
      const heText = isAll ? '\u05D4\u05DB\u05DC (\u200F' + items.length + ')' : (catMap[enLabel] || enLabel) + ' (\u200F' + counts[enLabel] + ')';
      btn.dataset.en = enText;
      btn.dataset.he = heText;
      btn.textContent = currentLang === 'he' ? heText : enText;
      btn.addEventListener('click', function () {
        bar.querySelectorAll('.filter-pill').forEach(function (p) {
          p.classList.remove('filter-pill--active');
        });
        btn.classList.add('filter-pill--active');
        grid.querySelectorAll('.card').forEach(function (card) {
          card.style.display = (isAll || card.dataset.category === enLabel) ? '' : 'none';
        });
      });
      return btn;
    }

    bar.appendChild(makePill(null, true));
    enCats.forEach(function (cat) { bar.appendChild(makePill(cat, false)); });
    return bar;
  }

  // ── ARCHIVE ──
  const archiveToggleBtn = document.getElementById('archive-toggle-btn');
  const archiveList = document.getElementById('archive-list');

  function toggleArchive() {
    const expanded = archiveToggleBtn.getAttribute('aria-expanded') === 'true';
    archiveToggleBtn.setAttribute('aria-expanded', String(!expanded));
    archiveList.classList.toggle('collapsed', expanded);
  }

  archiveToggleBtn.addEventListener('click', toggleArchive);
  archiveToggleBtn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleArchive(); }
  });

  ARCHIVE_WEEKS.forEach(function (week, wi) {
    const weekId = 'archive-week-cards-' + wi;

    const weekEl = document.createElement('div');
    weekEl.className = 'archive-week';

    const header = document.createElement('div');
    header.className = 'archive-week-header';
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', 'false');
    header.setAttribute('aria-controls', weekId);
    const itemCount = week.items.length;
    const enCount = itemCount + ' article' + (itemCount !== 1 ? 's' : '');
    const heCount = itemCount + ' \u05de\u05d0\u05de\u05e8\u05d9\u05dd';
    const enWeek = typeof week.week === 'object' ? week.week.en : week.week;
    const heWeek = typeof week.week === 'object' ? week.week.he : week.week;
    header.innerHTML = `<span class="archive-week-meta"><span class="archive-week-label" data-en="${escHtml(enWeek)}" data-he="${escHtml(heWeek)}">${escHtml(currentLang === 'he' ? heWeek : enWeek)}</span><span class="article-count" data-en="${escHtml(enCount)}" data-he="${escHtml(heCount)}">${enCount}</span></span><span class="archive-week-chevron">▼</span>`;

    const cardsGrid = document.createElement('div');
    cardsGrid.className = 'archive-week-cards';
    cardsGrid.id = weekId;

    week.items.forEach(function (item) {
      cardsGrid.appendChild(buildCard(item));
    });

    const weekBody = document.createElement('div');
    weekBody.className = 'archive-week-body collapsed';

    const weekFilterBar = buildFilterBar(week.items, cardsGrid);
    if (weekFilterBar) weekBody.appendChild(weekFilterBar);
    weekBody.appendChild(cardsGrid);

    function toggleWeek() {
      const exp = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', String(!exp));
      weekBody.classList.toggle('collapsed', exp);
    }

    header.addEventListener('click', toggleWeek);
    header.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleWeek(); }
    });

    weekEl.appendChild(header);
    weekEl.appendChild(weekBody);
    archiveList.appendChild(weekEl);
  });

  // ── LANGUAGE SWITCHING ──
  function setLanguage(lang) {
    currentLang = lang;
    // Update all translatable text nodes (titles, descriptions, category badges, filter pills)
    document.querySelectorAll('#panel-brief [data-en]').forEach(function (el) {
      el.textContent = (el.dataset[lang] !== undefined ? el.dataset[lang] : el.dataset.en);
    });
    // Update expand button labels, respecting each card's expanded state
    document.querySelectorAll('#panel-brief .card-expand-btn').forEach(function (btn) {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.querySelector('.expand-label').textContent = isExpanded
        ? (lang === 'he' ? '\u05D4\u05E6\u05D2 \u05E4\u05D7\u05D5\u05EA' : 'Show less')
        : (lang === 'he' ? '\u05E7\u05E8\u05D0 \u05E2\u05D5\u05D3' : 'Read more');
    });
    // RTL direction
    document.getElementById('panel-brief').setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
    // Active button highlight
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('lang-btn--active', b.dataset.lang === lang);
    });
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { setLanguage(btn.dataset.lang); });
  });

  function escHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
})();
