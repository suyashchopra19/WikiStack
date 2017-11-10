const morgan = require('morgan');
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const socketio = require('socket.io');
const path = require ('path');
const routes = require('./routes')
const models = require('./models')

app.engine('html',nunjucks.render);
app.set('view engine','html'); 
var env = nunjucks.configure('views',{noCache:true});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'/pubic')));




models.User.sync({})
    .then(function() {
        return models.Page.sync({})
    })
    .then(function() {
        const server = app.listen(3000, function() {
            console.log("Listening at 3000")
        });
    })
    .catch(console.error);

app.use('/',routes())

