document.addEventListener('DOMContentLoaded', function() {
  // Dynamic date formatting
  var elements = document.querySelectorAll('.dynamic-date');
  elements.forEach(function(el) {
    el.style.visibility = 'hidden';
    var timeEl = el.closest('time');
    if (!timeEl) return;
    
    var dateStr = timeEl.getAttribute('datetime');
    var date = new Date(dateStr);
    var now = new Date();
    var diffMs = now - date;
    var daysAgo = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (daysAgo < 30) {
      el.innerHTML = 'vor ' + (daysAgo === 1 ? '1 Tag' : daysAgo + ' Tagen');
    } else if (daysAgo < 90) {
      var monthsAgo = Math.floor(daysAgo / 30);
      el.innerHTML = 'vor ' + (monthsAgo === 1 ? '1 Monat' : monthsAgo + ' Monaten');
    } else {
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      el.innerHTML = date.toLocaleDateString('de-DE', options);
    }
    el.style.visibility = 'visible';
  });

  // Decal positioning - random values within defined bounds
  const decalTopMin = -100;   // in %
  const decalTopMax = -30;
  const decalLeftMin = -30;   // in %
  const decalLeftMax = 30;
  const decalWidthMin = 80;   // in %
  const decalWidthMax = 200;

  // Random value generator
  function randomInRange(min, max, unit = "") {
    return (Math.random() * (max - min) + min) + unit;
  }

  // Set CSS custom properties for decal positioning
  document.documentElement.style.setProperty('--decalTop', randomInRange(decalTopMin, decalTopMax, '%'));
  document.documentElement.style.setProperty('--decalLeft', randomInRange(decalLeftMin, decalLeftMax, '%'));
  document.documentElement.style.setProperty('--decalWidth', randomInRange(decalWidthMin, decalWidthMax, '%'));

  // Fade-in effect for decal
  var decal = document.querySelector('.decal');
  if (decal) {
    setTimeout(function() {
      decal.style.opacity = '1';
    }, 100);
  }

  // Initialize TOC state - collapsed by default
  const tocContent = document.getElementById('toc-content');
  if (tocContent) {
    tocContent.style.display = 'none';
  }
});

/**
 * Toggle Table of Contents visibility
 * Making it explicitly global to work with onclick handlers
 */
window.toggleTOC = function() {
  const content = document.getElementById('toc-content');
  const arrow = document.querySelector('.toc-arrow');
  
  if (!content || !arrow) return;
  
  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    arrow.textContent = '▲';
  } else {
    content.style.display = 'none';
    arrow.textContent = '▼';
  }
};