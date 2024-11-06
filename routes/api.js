//var express = require('express');
import * as express from 'express';
var router = express.Router();

//const { domains, events, users } = require("../common/model");
import { events } from "../common/model/index.js";
import DomainController from "../common/controller/DomainController.js";
import UserController from "../common/controller/UserController.js";

router.get('/domain', function(req, res) {
  res.send(DomainController.getAll());
});

router.get('/event', function(req, res) {
  res.send(events);
});

router.get('/user', function(req, res) {
  res.send(UserController.getAll());
});

export { router };
//module.exports = router;
