var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public')); // set static

var db = require('./config/db');
var port = process.env.PORT || 8080;

mongoose.connect(db.url);

app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());


var router = express.Router();

app.use('/api',router);

require('./public/app/routes')(app);

app.listen(port);
console.log('Static listening on port ' + port);

module.exports = app;