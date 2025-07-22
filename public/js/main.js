(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    // Event-Countdown und Datumsanzeige für Events
    // Dieses Skript war vorher inline in list.html und wurde ausgelagert

    var countdownEls = document.querySelectorAll('.event-countdown');
    var dateEls = document.querySelectorAll('.event-date');
    countdownEls.forEach(function(countdownEl, idx) {
      var dateStr = countdownEl.getAttribute('data-date');
      var eventDate = new Date(dateStr);
      var now = new Date();
      var daysDiff = Math.floor((eventDate - now) / (1000 * 60 * 60 * 24));
      var weekday = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"][eventDate.getDay()];
      var dateString = ("0" + eventDate.getDate()).slice(-2) + "." + ("0" + (eventDate.getMonth()+1)).slice(-2) + "." + eventDate.getFullYear();
      if (daysDiff >= 0) {
        if (daysDiff + 1 > 31) {
          var weeks = Math.ceil((daysDiff + 1) / 7);
          countdownEl.textContent = "Noch " + weeks + " Woche" + (weeks !== 1 ? "n" : "") + " (" + (daysDiff+1) + " Tag" + ((daysDiff+1) !== 1 ? "e" : "") + ")";
        } else {
          countdownEl.textContent = "Noch " + (daysDiff+1) + " Tag" + ((daysDiff+1) !== 1 ? "e" : "");
        }
        dateEls[idx].textContent = weekday + ", " + dateString;
      } else {
        countdownEl.textContent = "";
        dateEls[idx].textContent = dateString;
      }
    });

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
    
    const decalTopMin = -100;
    const decalTopMax = -30;
    const decalLeftMin = -30;
    const decalLeftMax = 30;
    const decalWidthMin = 80;
    const decalWidthMax = 200;
    function randomInRange(min, max, unit = "") {
      return Math.random() * (max - min) + min + unit;
    }
    document.documentElement.style.setProperty("--decalTop", randomInRange(decalTopMin, decalTopMax, "%"));
    document.documentElement.style.setProperty("--decalLeft", randomInRange(decalLeftMin, decalLeftMax, "%"));
    document.documentElement.style.setProperty("--decalWidth", randomInRange(decalWidthMin, decalWidthMax, "%"));
    var decal = document.querySelector(".decal");
    if (decal) {
      setTimeout(function() {
        decal.style.opacity = "1";
      }, 100);
    }
  });
})();
