// route for newuser POST
var express = require('express');
var router = express.Router();

// XXX will need to grab username and pass info from post
// and check username availability
router.post('/', function(req, res, next) {
  // post request passes args to this, where are they?
  res.render('newuser', { title: 'Welcome new user!' });

  //functionality of newBioForm goes in here too?
});

module.exports = router;
