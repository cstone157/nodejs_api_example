var express = require('express');
var router = express.Router();

const { events, users } = require("../common/models");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/event', function(req, res) {
  res.send(events);
});

router.get('/api/user', function(req, res) {
  res.send(users);
});

module.exports = router;
