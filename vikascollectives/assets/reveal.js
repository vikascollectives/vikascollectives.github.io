document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('section.block .card, section.block .quote, section.block h2, section.block .lead, details.faq, .contact-card, .stat').forEach(function(el){el.classList.add('reveal')});
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});return;
  }
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
});
