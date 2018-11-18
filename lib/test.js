let mongoose = require('mongoose');
let Promise = require('bluebird');
let corehelper = require('./core/corehelper')({db:true});
let logger = require('./core/logger');



function testCrawder() {

  logger.debug('testCrawder ...');
}

//for single file test
corehelper.on('ready', () => {

  logger.debug("test running ++++");
  testCrawder();
});