//var express = require('express');
import * as express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export { router };
//module.exports = router;
