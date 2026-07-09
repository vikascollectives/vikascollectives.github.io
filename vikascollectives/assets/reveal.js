/* Scroll-reveal animations */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('section.block .card, section.block .quote, section.block h2, section.block .lead, details.faq, .contact-card, .stat, .photo-frame, .gallery-grid figure')
    .forEach(function (el) { el.classList.add('reveal'); });
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  }

  /* On-page text resize (A- / A / A+), remembered across pages when storage is available */
  var sizes = [87.5, 100, 112.5, 125];
  var idx = 1;
  try { var saved = localStorage.getItem('vc-font'); if (saved !== null) idx = Math.min(Math.max(parseInt(saved, 10), 0), sizes.length - 1); } catch (e) {}
  function apply() {
    document.documentElement.style.fontSize = sizes[idx] + '%';
    try { localStorage.setItem('vc-font', idx); } catch (e) {}
  }
  apply();
  var ctr = document.querySelector('.font-controls');
  if (ctr) {
    ctr.addEventListener('click', function (ev) {
      var b = ev.target.closest('button'); if (!b) return;
      if (b.dataset.fs === 'dec' && idx > 0) idx--;
      if (b.dataset.fs === 'reset') idx = 1;
      if (b.dataset.fs === 'inc' && idx < sizes.length - 1) idx++;
      apply();
    });
  }
});
