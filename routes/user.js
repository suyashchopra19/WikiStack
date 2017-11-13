const express = require('express');
const router = express.Router();

var models = require('../models');
var Page = models.Page; 
var User = models.User; 

router.post('/', function(req, res, next) {
	
  // -> after save -> res.redirect('/');
});

module.exports = router;
