document.addEventListener('DOMContentLoaded', () => { const menuBtn = document.getElementById('menuBtn'); const nav = document.getElementById('nav'); menuBtn && menuBtn.addEventListener('click', () => { nav.classList.toggle('show'); });

const y = new Date().getFullYear(); const yearEl = document.getElementById('year'); if (yearEl) yearEl.textContent = y;

// Accessibility: focus outlines for keyboard users document.body.addEventListener('keyup', (e) => { if (e.key === 'Tab') document.body.classList.add('show-focus'); }); });
