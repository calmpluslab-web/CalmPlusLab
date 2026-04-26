/* index.js — Calm+Lab */
(function () {
  'use strict';

  /* ── Scroll reveal ── */
  function initReveal() {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach(function (el) { observer.observe(el); });
  }

  /* ── Stagger card delays ── */
  function initCardStagger() {
    document.querySelectorAll('.card').forEach(function (c, i) {
      c.style.transitionDelay = (i * 0.1) + 's';
    });
    document.querySelectorAll('.param-card').forEach(function (c, i) {
      c.style.transitionDelay = (i * 0.08) + 's';
    });
  }

  /* ── Sticky nav shadow ── */
  function initNavShadow() {
    var nav = document.querySelector('nav');
    if (!nav) return;
    window.addEventListener('scroll', function () {
      nav.style.boxShadow = window.scrollY > 8
        ? '0 4px 20px rgba(61,186,108,0.10)'
        : 'none';
    }, { passive: true });
  }

  /* ── Init ── */
  function init() {
    initReveal();
    initCardStagger();
    initNavShadow();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();