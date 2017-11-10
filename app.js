const morgan = require('morgan');
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const socketio = require('socket.io');
const path = require ('path');
const routes = require('./routes')

app.engine('html',nunjucks.render);
app.set('view engine','html'); 
var env = nunjucks.configure('views',{noCache:true});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'/pubic')));

const server = app.listen(3000, function(){
	console.log("Listening at 3000")
});

app.use('/',routes())

