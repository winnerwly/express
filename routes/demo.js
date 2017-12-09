var express = require('express');
var router = express.Router();

/* GET demo listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>这是一个demo页面</h1>');
});

module.exports = router;
