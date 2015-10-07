// this will render the main page if successful login
var express = require('express');
var router = express.Router();
// require our "database"
var data = require('../database');

router.post('/', function(req, res, next) {
  var user = req.body.user;
  var pass = req.body.pass;

  // if exists, then check password
  if (data.list('users')[user]) {
    if (data.list('users')[user].username === user && data.list('users')[user].password === pass) {
      // XXX will serve main page with posts and bio and whatnot
      res.send('it worked!');
    } else {
      // render login page with error message
      res.render('index', {error: 'Wrong username or password'});
    }
  } else {
    res.render('index', {error: 'Wrong username or password'});
  }
});

module.exports = router;
