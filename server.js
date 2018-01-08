var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var burgerController = require('./controllers/burgers_controller.js')

var app = express();
var mysql = require("mysql");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/createburger', burgerController);

app.put('/updateburger', burgerController);

app.use('/', function(req, res) {
  res.render('index', { title: 'Burgers' });
});

app.listen(3030);

