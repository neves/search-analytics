function eventToQuery (evt) {
  return evt.target.value.toLowerCase()
}

// update the query each user input
module.exports = function SearchAnalytics (input, queryRecognition) {
  input.addEventListener('input', function (evt) {
    queryRecognition.update(eventToQuery(evt))
  })

  // commit the query if the search input looses focus
  input.addEventListener('blur', function (evt) {
    queryRecognition.commit(eventToQuery(evt))
  })

  // commit the query if enter key was pressed
  input.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13 || evt.key === 'Enter' || evt.code === 'Enter') {
      queryRecognition.commit(eventToQuery(evt))
    }
  })
}
