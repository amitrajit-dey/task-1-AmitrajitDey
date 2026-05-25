(function () {
  'use strict';

  const fadeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target); // animate once only
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.fade-up').forEach(function (el) {
    fadeObserver.observe(el);
  });
})();
