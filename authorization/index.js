var express = require('express');
var router = express.Router();

module.exports = function (app) {
	router = require("./google.js")(app, router);

	router.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});

	return router;
}