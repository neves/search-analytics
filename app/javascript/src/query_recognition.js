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
