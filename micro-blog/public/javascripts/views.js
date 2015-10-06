
//UserView: displays the user's public profile (username and bio), a logout button, and all views below.
var UserView = Backbone.View.extend({
  render: function () {
    var greeting = ('<h2>Welcome back,' + this.model.get('username') + '</h2>');
    var logoutBtn = ('<button id = "logoutBtn">Log Out</button>');
    var userCrap = ('<div id="userCrap">' +  activeUser.get("userpic") + '<br>' + activeUser.get("username")+ '<br>' + '<p id="userBio">' + activeUser.get("userBio")
    + '</p>' + '</div>');
    var header = ('<div id="header">' + '<h1>'Home'</h1>' + '</div>' + greeting + logoutBtn);

  this.$el.html('header' + 'userCrap');

  },
  initialize: function () {

  },
  events: {
    "click #logoutBtn" : "logout"
    //any others?
    // maybe click to change userpic/name/bio?
  },
  logout: function () {
    /////
  },


var CreatePostView = Backbone.View.extend({
  render: function() {
    var postBox= '<textarea id="postBox"></textarea>';
    var postBtn = '<button id="postBtn"> Post It</button>';

  /*
  ''<input type="file" name="addPic" accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v">' +
  '<input type="submit">'
  */
  this.$el.html('<div id="createPost">'+ postBox + '<br>' + postBtn + '</div>');

  initialize: function() {

  },
  events: {
    "click #postBtn" : "post"
  },

  post: function() {
    var postText = $("#post").val()
    //If the collection is empty, first id should be 0
    if(this.collection.models.length === 0) {
      var newPost = new PostModel({id: 0, post: postStr, author: activeUser.get("username"),
      //timestamp
      // username & userpic
      });
    }
    //Otherwise, add 1 to id
      else {
        var newPost = new PostModel({id: app.posts.models[app.posts.models.length-1].id + 1, author: activeUser.get("username"),
        //timestamp
        // username & userpic
      });

      this.collection.add(newPost;
      newPost.save();
        
    //add to UserPostsCollection
    //prepend it to MyPostsView

    //clear post textarea
		$("#postBox").val('');
  }
  }
});

// MyPostsView: a list of all the posts made by the current user.
var MyPostsView = Backbone.View.Extend({

  render: function() {
    var userPostsView = 'div id="userPosts"></div>'
    var userCreatedPosts = this.collection.where({author: activeUser.get("username")});



  }

  appendNew: function(newModel) {
		var taskDescription = newModel.get("description");
		var taskCreator = newModel.get("creator");
		$("#userPosts").append( "<p>" + <div id="userPostInfo"> activeUser.get("username") + activeUser.get("userpic") + '</div>' + "br" + newPost + "</p>"
		);
	},


  initialize: function() {
    this.listenTo(this.collection, "add", this.render);
  },

  events: {

  }

});




//RecentPostsView: a list of the 5 most recent posts made by anyone.
var RecentPostsView = Backbone.View.Extend({
  //somewhere need to make sure it only shows 5  most recent posts


})

// end of UserView
});
