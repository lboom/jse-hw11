var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Micro-blog' });
  //res.get('home', { title: 'Micro-blog' });
  //XXX if we want to serve a static page... probably not though
  //res.sendFile('/index.html');
});

router.get('/home', function(req, res) {
  res.render('home');
})


module.exports = router;
