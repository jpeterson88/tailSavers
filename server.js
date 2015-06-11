var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var multer = require('multer'); 

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(multer()); // for parsing multipart/form-data


app.post('/getcoords', function (req, res) {
  console.log(req.body);
  res.json(req.body);
})


app.post('/', function (req, res) {
  console.log(req.body);
  res.json(req.body);
})