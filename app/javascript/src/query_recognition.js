/**
The idea behind this function is to keep track of the user input,
and as soon as the input changes to a different query, it commit the query using the saveFn function.
For example:

var queryRecognition = QueryRecognition(function (query) {
  console.log('saving', query)
})

queryRecognition.update('Ho')
queryRecognition.update('How do')
queryRecognition.update('How do I canc')
queryRecognition.update('How do I cancel my acc')
queryRecognition.update('How do I cancel my subscription') // saving How do I cancel my acc
queryRecognition.update('') // saving How do I cancel my subscription
onBlur and onEnterKey works too

*/
module.exports = function QueryRecognition (saveFn) {
  return {
    longestQuery: '', // store the longest string typed
    saved: false, // remember that longestQuery has already been commited

    commit: function (query) {
      if (query === '') return
      if (query !== this.longestQuery || !this.saved) {
        saveFn(query)
        this.saved = true
      }
    },

    update: function (query) {
      if (this.longestQuery === '') {
        this.longestQuery = query
        this.saved = false

      } else if (this.appendingQuery(query)) { // expanding
        this.longestQuery = query
        this.saved = false

      } else {
        if (!this.saved) this.commit(this.longestQuery)
        this.saved = true
        if (this.queryIsNew(query)) {
          this.saved = false
          this.longestQuery = query
        }
      }

      if (query === '') {
        this.longestQuery = ''
        this.saved = false
      }
    },

    appendingQuery: function (query) {
      return query.indexOf(this.longestQuery) === 0
    },

    queryIsNew: function (query) {
      return this.longestQuery.indexOf(query) !== 0
    }
  }
}
