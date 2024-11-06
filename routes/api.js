var express = require('express');
var router = express.Router();

const { domains, events, users } = require("../common/model");
const UserController = require("../common/controller/UserController");

router.get('/domain', function(req, res) {
  res.send(domains);
});

router.get('/event', function(req, res) {
  res.send(events);
});

router.get('/user', function(req, res) {
  res.send(UserController.getAll());
});

module.exports = router;
