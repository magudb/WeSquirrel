var express = require('express');
var router = express.Router();

var home = function(req, res, next) {  
  res.render('welcome', { title: 'WeSquirrel', layout: 'landing' });
};

var homeAuthenticated = function(req, res, next) {  
  console.log(req.user)
  if (!req.isAuthenticated()) { return next(); }
  res.render('index', { title: 'Express', user: req.user });
};

/* GET home page. */
router.get('/',homeAuthenticated, home);

module.exports = router;
