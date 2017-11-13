'use strict'
const express = require('express');
const router = express.Router();
var models = require('../models');
var Page = models.Page; 
var User = models.User;

router.get('/', function(req, res, next) {
    res.send('got to GET /wiki/');

});

router.get('/', function(req, res, next) {
    res.redirect('/');
});


router.post('/', function(req, res, next) {
    var title = req.body.title;
    var content = req.body.content;
   	console.log(req.body)
    // console.log(title);
    // console.log('post works')
    var page = Page.build({

        title: title,
        content: content
        // urlTitle:urlTitle
    });
    // STUDENT ASSIGNMENT:
    // make sure we only redirect *after* our save is complete!
    // note: `.save` returns a promise or it can take a callback.
    page.save()
    .then (() => {
    	console.log("page.saved")
    })
        .then(function() {
            res.redirect('/')
        })
    // res.json(req.body);
});

router.get('/add', function(req, res, next) {
    res.render('addpage');
});


module.exports = router;