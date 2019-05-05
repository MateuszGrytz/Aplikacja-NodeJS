var express = require('express');
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');


mongoose.connect('mongodb://localhost:27017/?gssapiServiceName=Mongodb');

var app = express();
var port = process.env.PORT || 3000;

app.use('/asety',express.static(__dirname + '/public'));
app.set('view engine','ejs');

setupController(app);
apiController(app);

app.listen(port);