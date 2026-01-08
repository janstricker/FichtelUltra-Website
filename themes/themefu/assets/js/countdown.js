document.addEventListener('DOMContentLoaded', function () {
  var countdownEl = document.getElementById('event-countdown')
  if (!countdownEl) return

  var dateEl = document.getElementById('event-date')
  var dateStr = countdownEl.getAttribute('data-date')
  var eventDate = new Date(dateStr)
  var now = new Date()
  var daysDiff = Math.floor((eventDate - now) / (1000 * 60 * 60 * 24))
  var weekday = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][
    eventDate.getDay()
  ]
  var dateString =
    ('0' + eventDate.getDate()).slice(-2) +
    '.' +
    ('0' + (eventDate.getMonth() + 1)).slice(-2) +
    '.' +
    eventDate.getFullYear()
  if (daysDiff >= 0) {
    if (daysDiff + 1 > 31) {
      var weeks = Math.ceil((daysDiff + 1) / 7)
      countdownEl.textContent =
        'Noch ' +
        weeks +
        ' Woche' +
        (weeks !== 1 ? 'n' : '') +
        ' (' +
        (daysDiff + 1) +
        ' Tag' +
        (daysDiff + 1 !== 1 ? 'e' : '') +
        ')'
    } else {
      countdownEl.textContent = 'Noch ' + (daysDiff + 1) + ' Tag' + (daysDiff + 1 !== 1 ? 'e' : '')
    }
    dateEl.textContent = weekday + ', ' + dateString
  } else {
    countdownEl.textContent = ''
    dateEl.textContent = dateString
  }
})
