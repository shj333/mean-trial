var express = require('express');
var router = express.Router();
var mainCtrl = require('../server/controllers/main');

/* GET home page. */
router.get('/', function(req, res, next) {
  mainCtrl.index(req, res, next);
});

module.exports = router;
