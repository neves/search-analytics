/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import QueryRecognition from '../src/query_recognition'
import SearchAnalytics from '../src/search_analytics'

// post the query to update the database
function save (query) {
  fetch('/searches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: 'query=' + encodeURI(query)
  })
}

// Used by GoogleMaps in views/articles/index.html.erb
window.initSearchBox = function () {
  var searchInput = document.getElementById('search')
  var searchBox = new google.maps.places.SearchBox(searchInput)
  SearchAnalytics(searchInput, QueryRecognition(save))
  searchBox.addListener('places_changed', function() {
    console.log(searchBox.getPlaces())
  })
}
