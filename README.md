# Search Analytics

The idea of this solution is to create a external micro-service that just do search analytics,
and can be easily plugged into any search input on any site, pretty much like https://www.algolia.com does.

Project demo at https://helpjuice-search-analytics.herokuapp.com/

# Performance

- The query is processed on the client side before sending to the server side
- The query is stored by it's md5 hash, so the lookup is faster
- The hit increment is done atomically
- TODO: Enqueue the database updates for fast user return
