//UserView: displays the user's public profile (username and bio), a logout button, and all views below.
var UserView = Backbone.View.extend({
  render: function () {
    var greeting = '<h1>Welcome back,</h1>'; // ___ ?? ('username') + '
    var logoutBtn = '<button method="get" id = "logoutBtn">Log Out</button>';
    // var userCrap = '<div id="userCrap">' + users.get("username")+ '<br>' +  users.get("userpic") + '<br>'  '<p id="userBio">' + db.get("userBio") + '</p>' + '</div>';
    var header = '<div id="header">' + logoutBtn + greeting + '</div>';

    this.$el.html(header);
    return this;

  },
  initialize: function () {

  },
  events: {
    "click #logoutBtn" : "logout"
    //any others?

  },
  logout: function () {
    /////
  },
});



// var CreatePostView = Backbone.View.extend({
//   render: function() {
//     var postBox= '<textarea id="postBox"></textarea>';
//     var postBtn = '<button method="post" id="postBtn"> Post It</button>';
//
//     //upload a picture?
//     /*
//     ''<input type="file" name="addPic" accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v">' +
//     '<input type="submit">'
//     */
//     this.$el.html('<div id="createPost">'+ postBox + '<br>' + postBtn + '</div>');
//     return this;
//   },
//   initialize: function() {
//
//   },
//   events: {
//     "click #postBtn" : "post"
//   },
//
//   post: function() {
//     var postText = $("#post").val()
//     // //If the collection is empty, first id should be 0
//     // if(this.collection.length === 0) {
//     //   var newPost = new PostModel({id: 0, post: postStr, author: activeUser.get("username"),
//     //   //timestamp
//     //   // username & userpic
//     //   });
//     // }
//     // //Otherwise, add 1 to id
//     //   else
//     {
//       var newPost = new UserPostModel({id: app.posts.models[app.posts.models.length-1].id + 1, author: activeUser.get("username"),
//         //timestamp
//         // username & userpic
//       });
//
//       this.collection.add(newPost);
//       newPost.save();
//
//     //add to UserPostsCollection
//     //prepend it to MyPostsView
//     //prepend it to RecentPostsView
//
//     //clear post textarea
// 		//$("#postBox").val('');
//   }
//   }
// });
//
// MyPostsView: a list of all the posts made by the current user.
// var MyPostsView = Backbone.View.extend({
//
//   render: function() {
//     var userPostsView = 'div id="userPosts"></div>'
//     var userCreatedPosts = this.collection.where({author: activeUser.get("username")});
// },
//
//   appendNew: function(newModel) {
// 		var taskDescription = newModel.get("description");
// 		var taskCreator = newModel.get("creator");
// 		$("#userPosts").append( "<p>" + '<div id="userPostInfo">' + activeUser.get("username") + activeUser.get("userpic") + '</div>' + "br" + newPost + "</p>"
// 		);
// 	},
//
//
//   initialize: function() {
//     this.listenTo(this.collection, "add", this.render);
//     return this;
//   },
//
//   events: {
//
//   }
//
// });
//
//
// //RecentPostsView: a list of the 5 most recent posts made by anyone.
// var RecentPostsView = Backbone.View.extend({
//
//
// });
