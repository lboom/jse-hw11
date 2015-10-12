// orchestrate version of database
var key = require('./config');
var orch = require('orchestrate');
var db = orch(key.dbkey);

var list = function(collection) {
  // list all records from collection
  db.list(collection).then(function(res) {
    // XXX may need to clean up the results
    // need to return values...
    res.end(res.body.results);
  })
}

var get = function(collection, id) {
  // get a record from the collection by `id`
  //db.get
}

// exports
module.exports = {
  list: list,
  get: get
}
