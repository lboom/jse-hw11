var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('create', { title: 'Create a new account' });
});

module.exports = router;
