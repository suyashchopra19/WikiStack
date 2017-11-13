'use strict'

const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');

router.use('/wiki', wikiRouter);
router.use('/wiki/add', userRouter);


router.get('/', (req, res) => { //middleware, when invoked would look up in views to find html // nunjucks does the needed work
    res.render('index', function(err, html) {
        if (err) console.log('error');
        console.log("this is running")
        res.send(html);
    })
});

// router.get('/', function(req, res, next) {
//     res.redirect('/');
// });




module.exports = router;