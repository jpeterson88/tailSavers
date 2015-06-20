var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
//var multer = require('multer'); 

app.use(express.static(__dirname));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(multer()); // for parsing multipart/form-data



//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDm4xGlr4ptZ-7Cx8OGqfDQy-6DBBjrEbQ


app.post('/getcoords', function (req, res) {
 // console.log(req.body);
 // res.json(req.body);

var fullAddress = '';

	if(req.body !== null){
		getLatAndLongFromAddress(buildAddressFromBody(req.body))

	}
		

console.log(fullAddress);


})


app.post('/', function (req, res) {
  console.log(req.body);
  res.json(req.body);
})


function buildAddressFromBody(body){
	street = body.street.replace(/\s/g, '+');
	city = body.city.replace(/\s/g, '+');
	state = body.state.replace(/\s/g, '+');	

	return street + ',+' + city + ',+' + state;
}

function getLatAndLongFromAddress(address){
	  var options = {
	    host: 'https://maps.googleapis.com',
	    path: '/maps/api/geocode/json?address=' + address +'&key=AIzaSyDm4xGlr4ptZ-7Cx8OGqfDQy-6DBBjrEbQ'
	  };
	  //maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=API_KEY

	  var req = http.get(options, function(res) {
	 // console.log('STATUS: ' + res.statusCode);
	  //console.log('HEADERS: ' + JSON.stringify(res.headers));
	  console.log('PATH: ' + options.path);

	  // Buffer the body entirely for processing as a whole.
	  var bodyChunks = [];
	  res.on('data', function(chunk) {
	    // You can process streamed parts here...
	    bodyChunks.push(chunk);
	  }).on('end', function() {
	    var body = Buffer.concat(bodyChunks);
	    console.log('BODY: ' + body);
	    // ...and/or process the entire body here.
	  })
	});

	req.on('error', function(e) {
	  console.log('ERROR: ' + e.message);
	});
}





app.listen(3000);