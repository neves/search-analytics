function eventToQuery (evt) {
  return evt.target.value.toLowerCase()
}

module.exports = function SearchAnalytics (input, queryRecognition) {
  input.addEventListener('input', function (evt) {
    queryRecognition.update(eventToQuery(evt))
  })

  input.addEventListener('blur', function (evt) {
    queryRecognition.commit(eventToQuery(evt))
  })

  input.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13 || evt.key === 'Enter' || evt.code === 'Enter') {
      queryRecognition.commit(eventToQuery(evt))
    }
  })
}
