var express = require('express');
var bodyParser = require('body-parser');
var port = '3000';

var app = module.exports = express();

  
app.listen(port);

app.use(bodyParser.urlencoded({encoded:true}));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'content-type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})