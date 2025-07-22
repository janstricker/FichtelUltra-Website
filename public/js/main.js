(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll(".dynamic-date");
    elements.forEach(function(el) {
      el.style.visibility = "hidden";
      var timeEl = el.closest("time");
      if (!timeEl) return;
      var dateStr = timeEl.getAttribute("datetime");
      var date = new Date(dateStr);
      var now = /* @__PURE__ */ new Date();
      var diffMs = now - date;
      var daysAgo = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
      if (daysAgo < 30) {
        el.innerHTML = "vor " + (daysAgo === 1 ? "1 Tag" : daysAgo + " Tagen");
      } else if (daysAgo < 90) {
        var monthsAgo = Math.floor(daysAgo / 30);
        el.innerHTML = "vor " + (monthsAgo === 1 ? "1 Monat" : monthsAgo + " Monaten");
      } else {
        var options = { year: "numeric", month: "long", day: "numeric" };
        el.innerHTML = date.toLocaleDateString("de-DE", options);
      }
      el.style.visibility = "visible";
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Grenzen definieren
    const decalTopMin = -100;   // in %
    const decalTopMax = -30;
    const decalLeftMin = -30;   // in %
    const decalLeftMax = 30;
    const decalWidthMin = 80; // in %
    const decalWidthMax = 200;

    // Zufallswert-Generator
    function randomInRange(min, max, unit = "") {
      return (Math.random() * (max - min) + min) + unit;
    }

    // Werte setzen
    document.documentElement.style.setProperty('--decalTop', randomInRange(decalTopMin, decalTopMax, '%'));
    document.documentElement.style.setProperty('--decalLeft', randomInRange(decalLeftMin, decalLeftMax, '%'));
    document.documentElement.style.setProperty('--decalWidth', randomInRange(decalWidthMin, decalWidthMax, '%'));

    // Fade-In für das Decal
    var decal = document.querySelector('.decal');
    if (decal) {
      setTimeout(function() {
        decal.style.opacity = '1';
      }, 100);
    }
  });
})();
