var Promise = require("promise");
var Mediator = require("mediator-js");
var mediator = new Mediator();

module.exports = function (id) {
	var exports = {};
	var links = [];
	var userId = id;

	exports.getUserId = function () {
		return userId;
	}

	exports.addLinks = function (value) {

		return new Promise(function (resolve, reject) {
			if(!value.isValid()){
				reject(new Error("Link is not valid"));
			}
			
			links = links.concat(value);
			
			resolve(null, links);

		});		
		
	};
	exports.removeLinks = function () {

	}
	exports.getLinks = function () {
		return links;
	}

	exports.toJson = function () {
		return {
			"userid": userId,
			"links": links
		}
	};

	exports.save = function () {

	}

	return exports;
};