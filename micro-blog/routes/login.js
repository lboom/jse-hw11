// this will render the main page if successful login
var express = require('express');
var router = express.Router();

// XXX check username and pass word, pass on to main if correct
router.post('/', function(req, res, next) {
  // XXX for now
  res.send('it worked!');
});

module.exports = router;
