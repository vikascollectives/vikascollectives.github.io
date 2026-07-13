/* ============================================================
   Vikas Collectives — Gallery Scroller (v9)
   File: assets/gallery.js — loaded only on gallery.html,
   after assets/reveal.js.
   Mouse-wheel scrolling, drag-to-scroll, prev/next buttons
   with wrap-around looping (instant snap), keyboard support.
   Auto-initialises every .gsx-wrap on the page.
   ============================================================ */
(function () {
  'use strict';

  function initScroller(wrap) {
    var track = wrap.querySelector('.gsx-track');
    var prev  = wrap.querySelector('.gsx-prev');
    var next  = wrap.querySelector('.gsx-next');
    if (!track) return;

    /* ---- Edge fade state ---- */
    var ticking = false;
    function updateState() {
      var max = track.scrollWidth - track.clientWidth;
      var x = track.scrollLeft;
      wrap.classList.toggle('gsx-at-start', x <= 2);
      wrap.classList.toggle('gsx-at-end', x >= max - 2);
      ticking = false;
    }
    function requestUpdate() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateState);
      }
    }
    track.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    /* ---- Prev / Next buttons with wrap-around loop ---- */
    function page(dir) {
      var max = track.scrollWidth - track.clientWidth;
      // Loop around: next at the end snaps back to the first image,
      // previous at the start snaps to the last image.
      if (dir > 0 && track.scrollLeft >= max - 2) {
        track.scrollTo({ left: 0, behavior: 'auto' });
      } else if (dir < 0 && track.scrollLeft <= 2) {
        track.scrollTo({ left: max, behavior: 'auto' });
      } else {
        track.scrollBy({ left: dir * track.clientWidth * 0.85, behavior: 'smooth' });
      }
    }
    if (prev) prev.addEventListener('click', function () { page(-1); });
    if (next) next.addEventListener('click', function () { page(1); });

    /* ---- Mouse wheel -> horizontal scroll ---- */
    track.addEventListener('wheel', function (e) {
      var delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      var max = track.scrollWidth - track.clientWidth;
      // Only capture the wheel while the strip can still move in that
      // direction, so normal page scrolling works at either end.
      if ((delta > 0 && track.scrollLeft < max - 1) ||
          (delta < 0 && track.scrollLeft > 1)) {
        e.preventDefault();
        track.scrollLeft += delta;
      }
    }, { passive: false });

    /* ---- Drag-to-scroll (mouse only; touch uses native scrolling) ---- */
    var isDown = false, startX = 0, startLeft = 0;
    track.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      isDown = true;
      startX = e.clientX;
      startLeft = track.scrollLeft;
      track.classList.add('gsx-dragging');
      track.setPointerCapture(e.pointerId);
    });
    track.addEventListener('pointermove', function (e) {
      if (!isDown) return;
      track.scrollLeft = startLeft - (e.clientX - startX);
    });
    function endDrag(e) {
      if (!isDown) return;
      isDown = false;
      track.classList.remove('gsx-dragging');
      if (e.pointerId !== undefined && track.hasPointerCapture(e.pointerId)) {
        track.releasePointerCapture(e.pointerId);
      }
    }
    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);
    track.addEventListener('pointerleave', endDrag);

    /* ---- Keyboard support ---- */
    track.setAttribute('tabindex', '0');
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); page(1); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); page(-1); }
    });

    updateState();
    // Recheck once images load, since scrollWidth grows as they arrive
    track.querySelectorAll('img').forEach(function (img) {
      if (!img.complete) img.addEventListener('load', requestUpdate, { once: true });
    });
  }

  function initAll() {
    document.querySelectorAll('.gsx-wrap').forEach(initScroller);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
