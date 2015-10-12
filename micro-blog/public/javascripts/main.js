// may use this file to load some other needed js files
// also for event listeners
var userView = new UserView();
$('#app').append(userView.render().$el);

var createPostView = new CreatePostView();
$('#app').append(createPostView.render().$el);

// var postModel = new PostModel();
// $('#app').append(PostModel.render().$el);
