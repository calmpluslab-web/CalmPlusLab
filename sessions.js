/* sessions.js — Calm+Lab */

(function () {
  'use strict';

  /* ── Intersection Observer for fade-up animations ── */
  function initFadeUps() {
    var elements = document.querySelectorAll('.fade-up');
    if (!elements.length) return;

    // Fallback: if IntersectionObserver not supported, just show everything
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
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(function (el) { observer.observe(el); });
  }

  /* ── Stagger delay for multiple siblings ── */
  function initStaggerDelays() {
    var cards = document.querySelectorAll('.card.fade-up');
    cards.forEach(function (card, i) {
      card.style.transitionDelay = (i * 0.12) + 's';
    });
  }

  /* ── Init on DOM ready ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initStaggerDelays();
      initFadeUps();
    });
  } else {
    initStaggerDelays();
    initFadeUps();
  }
})();
