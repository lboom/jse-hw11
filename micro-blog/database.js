// main data store with users and posts
var database = {
  users: {
    // default users here
    elijah: {username: 'elijah', password: 'butts', bio: ''},
    wendy: {username: 'wendy', password: 'thingy', bio: ''},
    louise: {username: 'louise', password: 'narwhal', bio: ''}
  },
  posts: [
    // sample posts
    // XXX change the timestamps soon
    {id: 0, text: 'The Flaming Carrot is boss!', author: 'elijah', timestamp: 1},
    {id: 1, text: 'When the walls fell...', author: 'wendy', timestamp: 1},
    {id: 2, text: 'Dont know nothin bout no handlebars -eric', author: 'louise', timestamp: 1}
  ]
}

// methods to access the data
var list = function(collection) {
  // list a collection
  return database[collection];
}

var get = function(collection, id) {
  // get data from a collection mathched by id
  return database[collection][id];
}

var put = function(collection, id, obj) {
  // add a new obj to a collection ie: user or post
  database[collection][id] = obj;
}

var post = function(collection, obj) {
  // XXX not done, will need some kinda
  // helper function
}

// return data functions
module.exports = {
  list: list,
  get: get,
  put: put,
  post: post
}
