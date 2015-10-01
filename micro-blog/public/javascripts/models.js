// XXX this may be moved elsewhere
//  we will be creating collections for user posts, but maybe in
//  another file?

// micro-blog users
var UserModel = Backbone.model.extend({
  defaults: {
    username: '',
    bio: '',
    password: ''
  }
});

// each user will have a collection of posts associated
var PostModel = Backbone.model.extend({
  defaults: {
    text: '',
    author: '',
    timestamp: ''
  }
});
