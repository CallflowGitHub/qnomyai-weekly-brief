// ── APP LOGIC ──

(function () {
  // Set edition date in header
  const now = new Date();
  const opts = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('edition-date').textContent =
    now.toLocaleDateString('en-US', opts);

  // Footer year
  document.getElementById('footer-year').textContent = now.getFullYear();

  // Article count
  document.getElementById('article-count').textContent =
    NEWS_ITEMS.length + ' article' + (NEWS_ITEMS.length !== 1 ? 's' : '');

  // Collapse toggle
  const titleBtn = document.getElementById('section-title-btn');
  const grid = document.getElementById('news-grid');

  function toggleGrid() {
    const expanded = titleBtn.getAttribute('aria-expanded') === 'true';
    titleBtn.setAttribute('aria-expanded', String(!expanded));
    grid.classList.toggle('collapsed', expanded);
  }

  titleBtn.addEventListener('click', toggleGrid);
  titleBtn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleGrid(); }
  });

  // Render current week cards
  NEWS_ITEMS.forEach(function (item) {
    grid.appendChild(buildCard(item));
  });

  function buildCard(item) {
    const card = document.createElement('article');
    card.className = 'card';

    const linkHtml = item.url
      ? `<a class="card-link" href="${escHtml(item.url)}" target="_blank" rel="noopener noreferrer">Read more</a>`
      : '';

    card.innerHTML = `
      <div class="card-top">
        <span class="card-category">${escHtml(item.category)}</span>
        <span class="card-date">${escHtml(item.date)}</span>
      </div>
      <h3 class="card-title">${escHtml(item.title)}</h3>
      <div class="card-desc-wrap">
        <p class="card-description">${escHtml(item.description)}</p>
        <div class="card-desc-fade"></div>
      </div>
      <button class="card-expand-btn" aria-expanded="false" type="button">
        <span class="expand-label">Read more</span>
        <span class="expand-icon">&#43;</span>
      </button>
      <div class="card-footer">
        <span class="card-source">${escHtml(item.source)}</span>
        ${linkHtml}
      </div>
    `;

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
        label.textContent = 'Read more';
        icon.innerHTML = '&#43;';
        card.classList.remove('card-open');
      } else {
        wrap.classList.add('expanded');
        fade.style.display = 'none';
        btn.setAttribute('aria-expanded', 'true');
        label.textContent = 'Show less';
        icon.innerHTML = '&#8722;';
        card.classList.add('card-open');
      }
    }

    btn.addEventListener('click', toggleExpand);
    desc.addEventListener('click', toggleExpand);

    return card;
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
    header.setAttribute('aria-expanded', 'true');
    header.setAttribute('aria-controls', weekId);
    header.innerHTML = `<span class="archive-week-label">${escHtml(week.week)}</span><span class="archive-week-chevron">▼</span>`;

    const cardsGrid = document.createElement('div');
    cardsGrid.className = 'archive-week-cards';
    cardsGrid.id = weekId;

    week.items.forEach(function (item) {
      cardsGrid.appendChild(buildCard(item));
    });

    function toggleWeek() {
      const exp = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', String(!exp));
      cardsGrid.classList.toggle('collapsed', exp);
    }

    header.addEventListener('click', toggleWeek);
    header.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleWeek(); }
    });

    weekEl.appendChild(header);
    weekEl.appendChild(cardsGrid);
    archiveList.appendChild(weekEl);
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
