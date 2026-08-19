/* ============================================================
   app.js — lightweight vanilla JS for interactivity.
   No dependencies. Handles:
     • Mobile drawer open/close
     • Search panel toggle
     • Language dropdown
     • Desktop dropdown hover is CSS-only; this file adds
       keyboard/focus support where needed
     • FAQ accordion (single-open behaviour)
     • Back-to-top button
     • Sticky header shadow on scroll
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Mobile drawer ---------- */
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileOverlay = document.querySelector('[data-mobile-overlay]');
  const mobilePanel = document.querySelector('[data-mobile-panel]');

  function openMobileMenu() {
    if (!mobileOverlay) return;
    mobileOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => mobilePanel.classList.add('translate-x-0'));
  }

  function closeMobileMenu() {
    if (!mobileOverlay) return;
    mobileOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openMobileMenu);
  if (mobileOverlay) {
    mobileOverlay.querySelectorAll('[data-mobile-close]').forEach((el) =>
      el.addEventListener('click', closeMobileMenu)
    );
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
  });

  /* ---------- Search panel ---------- */
  const searchToggle = document.querySelector('[data-search-toggle]');
  const searchPanel = document.querySelector('[data-search-panel]');
  if (searchToggle && searchPanel) {
    searchToggle.addEventListener('click', () => {
      searchPanel.classList.toggle('hidden');
    });
  }

  /* ---------- Language dropdown ---------- */
  const langToggle = document.querySelector('[data-lang-toggle]');
  const langMenu = document.querySelector('[data-lang-menu]');
  if (langToggle && langMenu) {
    langToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = langToggle.getAttribute('aria-expanded') === 'true';
      langToggle.setAttribute('aria-expanded', String(!expanded));
      langMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', () => {
      langMenu.classList.add('hidden');
      langToggle.setAttribute('aria-expanded', 'false');
    });
  }

  /* ---------- FAQ accordion (single open) ---------- */
  const accordion = document.querySelector('[data-accordion]');
  if (accordion) {
    const items = accordion.querySelectorAll('[data-accordion-item]');
    items.forEach((item) => {
      const summary = item.querySelector('summary');
      summary.addEventListener('click', (e) => {
        // Prevent default toggle, then enforce single-open
        e.preventDefault();
        const isOpen = item.hasAttribute('open');
        items.forEach((other) => other.removeAttribute('open'));
        if (!isOpen) item.setAttribute('open', '');
      });
    });
  }

  /* ---------- Back to top ---------- */
  const backToTop = document.querySelector('[data-back-to-top]');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.remove('hidden');
        backToTop.classList.add('flex');
      } else {
        backToTop.classList.add('hidden');
        backToTop.classList.remove('flex');
      }
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Sticky header shadow ---------- */
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('is-scrolled', window.scrollY > 10);
    });
  }
})();
