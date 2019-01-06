var express = require('express');
var router = express.Router();
var helpers = require('handlebars-helpers')();
let logger = require('../lib/core/logger');

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.debug('app.get called !!!');

  res.render('index', {
    title: 'Express',
    helpers: helpers
  });
});

router.get('/editor', function(req, res, next) {
  logger.debug('router: /editor called !!!');

  res.render('editor',
    {
      layout: 'layout',
      title: '编辑器'
    });

});

module.exports = router;
