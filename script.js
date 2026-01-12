
// script.js
(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle'); // <button id="theme-toggle">Tema</button>

  const saved = localStorage.getItem('theme') || 'light';
  root.setAttribute('data-theme', saved);

  function applyTheme(next) {
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  toggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'light';
    applyTheme(current === 'light' ? 'dark' : 'light');
  });
})();
``
