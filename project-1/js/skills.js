(function () {
  'use strict';

  const skillsPanel = document.getElementById('skills-panel');
  if (!skillsPanel) return;

  const skillObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateSkillBars();
          skillObserver.unobserve(entry.target); 
        }
      });
    },
    { threshold: 0.3 }
  );

  skillObserver.observe(skillsPanel);

  function animateSkillBars() {
    var bars = skillsPanel.querySelectorAll('.skill-fill');

    bars.forEach(function (bar, index) {
      var targetWidth = parseFloat(bar.dataset.width) || 0;

      setTimeout(function () {
        bar.style.transform = 'scaleX(' + targetWidth + ')';
      }, index * 120);
    });
  }
})();
