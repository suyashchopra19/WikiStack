'use strict'

const express = require('express');
const router = express.Router();

module.exports = function() {

    router.get('/', (req, res) => {
        res.render('index', function(err, html) {
        	if(err) console.log('error');
            console.log("this is running")
            res.send(html);
        })
    })

    return router;
}