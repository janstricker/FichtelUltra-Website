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
})();
