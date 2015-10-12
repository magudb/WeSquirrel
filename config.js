var node_env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/config.json')[node_env];

module.exports = config;