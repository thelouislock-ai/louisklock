(function () {
  var STYLE = '\
  #llSearchTrigger{background:none;border:none;cursor:pointer;padding:8px;margin-left:4px;display:flex;align-items:center;color:var(--off-white);opacity:0.88;transition:opacity 0.3s;}\
  #llSearchTrigger:hover{opacity:1;}\
  #llSearchTrigger svg{width:17px;height:17px;display:block;}\
  #llSearchOverlay{position:fixed;inset:0;background:rgba(10,9,8,0.92);backdrop-filter:blur(6px);z-index:400;display:flex;align-items:flex-start;justify-content:center;padding:12vh 20px 40px;opacity:0;visibility:hidden;transition:opacity 0.3s ease;}\
  #llSearchOverlay.open{opacity:1;visibility:visible;}\
  .ll-search-panel{width:100%;max-width:620px;}\
  .ll-search-inputrow{display:flex;align-items:center;gap:16px;border-bottom:1px solid rgba(245,243,239,0.3);padding-bottom:16px;}\
  .ll-search-inputrow svg{width:20px;height:20px;flex-shrink:0;color:var(--gold);}\
  #llSearchInput{flex:1;background:none;border:none;outline:none;color:var(--off-white);font-family:"Cormorant Garamond",serif;font-size:28px;font-weight:400;}\
  #llSearchInput::placeholder{color:rgba(245,243,239,0.4);}\
  #llSearchClose{background:none;border:none;color:var(--off-white);opacity:0.6;cursor:pointer;font-size:26px;line-height:1;padding:4px 6px;font-family:Inter,sans-serif;font-weight:300;}\
  #llSearchClose:hover{opacity:1;}\
  .ll-search-results{margin-top:28px;max-height:56vh;overflow-y:auto;}\
  .ll-search-result{display:block;text-decoration:none;padding:18px 0;border-bottom:1px solid rgba(245,243,239,0.08);}\
  .ll-search-result:first-child{padding-top:0;}\
  .ll-result-title{font-family:"Cormorant Garamond",serif;font-size:19px;color:var(--off-white);margin-bottom:6px;}\
  .ll-result-title mark{background:none;color:var(--gold);font-style:italic;}\
  .ll-result-snippet{font-family:Inter,sans-serif;font-size:13px;font-weight:300;line-height:1.7;color:var(--silver);}\
  .ll-result-snippet mark{background:none;color:var(--champagne);font-weight:500;}\
  .ll-search-hint,.ll-search-empty{font-family:Inter,sans-serif;font-size:13px;font-weight:300;color:var(--silver);opacity:0.7;margin-top:28px;}\
  ';

  function injectStyle() {
    var s = document.createElement('style');
    s.id = 'll-search-styles';
    s.textContent = STYLE;
    document.head.appendChild(s);
  }

  var SEARCH_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><line x1="20" y1="20" x2="15.3" y2="15.3"/></svg>';

  function buildOverlay() {
    var overlay = document.createElement('div');
    overlay.id = 'llSearchOverlay';
    overlay.innerHTML =
      '<div class="ll-search-panel">' +
        '<div class="ll-search-inputrow">' +
          SEARCH_ICON +
          '<input type="text" id="llSearchInput" placeholder="Search the site..." autocomplete="off" spellcheck="false">' +
          '<button id="llSearchClose" aria-label="Close search" type="button">&times;</button>' +
        '</div>' +
        '<div class="ll-search-results" id="llSearchResults"></div>' +
      '</div>';
    document.body.appendChild(overlay);
    return overlay;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function highlight(text, query) {
    var idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return escapeHtml(text);
    return escapeHtml(text.slice(0, idx)) + '<mark>' + escapeHtml(text.slice(idx, idx + query.length)) + '</mark>' + escapeHtml(text.slice(idx + query.length));
  }

  function snippetAround(text, query, radius) {
    var lower = text.toLowerCase();
    var idx = lower.indexOf(query.toLowerCase());
    if (idx === -1) return text.slice(0, radius * 2);
    var start = Math.max(0, idx - radius);
    var end = Math.min(text.length, idx + query.length + radius);
    var snippet = text.slice(start, end);
    if (start > 0) snippet = '...' + snippet;
    if (end < text.length) snippet = snippet + '...';
    return snippet;
  }

  function runSearch(query) {
    var resultsEl = document.getElementById('llSearchResults');
    var index = window.LLSearchIndex || [];
    query = query.trim();
    if (!query) {
      resultsEl.innerHTML = '<div class="ll-search-hint">Try "condo," "development," "closing," a neighborhood, or a service.</div>';
      return;
    }
    var q = query.toLowerCase();
    var matches = [];
    for (var i = 0; i < index.length; i++) {
      var entry = index[i];
      var titleHit = entry.title.toLowerCase().indexOf(q) !== -1;
      var textHit = entry.text.toLowerCase().indexOf(q) !== -1;
      if (titleHit || textHit) {
        matches.push({ entry: entry, titleHit: titleHit });
      }
    }
    matches.sort(function (a, b) { return (b.titleHit ? 1 : 0) - (a.titleHit ? 1 : 0); });
    matches = matches.slice(0, 10);

    if (matches.length === 0) {
      resultsEl.innerHTML = '<div class="ll-search-empty">No matches for "' + escapeHtml(query) + '." Try a different word.</div>';
      return;
    }

    resultsEl.innerHTML = matches.map(function (m) {
      var entry = m.entry;
      var snippet = snippetAround(entry.text, query, 70);
      return '<a class="ll-search-result" href="' + entry.url + '">' +
        '<div class="ll-result-title">' + highlight(entry.title, query) + '</div>' +
        '<div class="ll-result-snippet">' + highlight(snippet, query) + '</div>' +
        '</a>';
    }).join('');
  }

  function openOverlay(overlay) {
    overlay.classList.add('open');
    var input = document.getElementById('llSearchInput');
    runSearch('');
    setTimeout(function () { input.focus(); }, 50);
    document.body.style.overflow = 'hidden';
  }

  function closeOverlay(overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function init() {
    injectStyle();
    var overlay = buildOverlay();
    var input = document.getElementById('llSearchInput');
    var closeBtn = document.getElementById('llSearchClose');

    input.addEventListener('input', function () { runSearch(input.value); });
    closeBtn.addEventListener('click', function () { closeOverlay(overlay); });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeOverlay(overlay);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeOverlay(overlay);
    });

    var nav = document.getElementById('nav');
    var navToggle = document.getElementById('navToggle');
    if (nav && navToggle) {
      var trigger = document.createElement('button');
      trigger.id = 'llSearchTrigger';
      trigger.type = 'button';
      trigger.setAttribute('aria-label', 'Search');
      trigger.innerHTML = SEARCH_ICON;
      trigger.addEventListener('click', function () { openOverlay(overlay); });
      nav.insertBefore(trigger, navToggle);
    }

    var mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
      var mobileTrigger = document.createElement('a');
      mobileTrigger.href = '#';
      mobileTrigger.textContent = 'Search';
      mobileTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        mobileMenu.classList.remove('open');
        var hamburger = document.getElementById('hamburger');
        if (hamburger) hamburger.classList.remove('open');
        openOverlay(overlay);
      });
      mobileMenu.appendChild(mobileTrigger);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
