var winston = require('winston');

var config = require('./config');
var logger = winston.createLogger({
  transports: [
    new (winston.transports.Console)({
        level: config.log_level,
        colorize: true
    })
  ]
});

module.exports = logger;
