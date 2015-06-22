var express = require('express');
var request = require('request');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDm4xGlr4ptZ-7Cx8OGqfDQy-6DBBjrEbQ

app.post('/getcoords', function (req, res) {

	if(req.body !== null){
	request('https://maps.googleapis.com/maps/api/geocode/json?address=' + buildAddressFromBody(req.body) +'&key=AIzaSyDm4xGlr4ptZ-7Cx8OGqfDQy-6DBBjrEbQ', function (error, response, body) {
		  if (!error && response.statusCode == 200) {
			  var resp = JSON.parse(body);
			  
			  //Look at status codes and return proper code so client knows how to handle
			  var status = getGoogleGeocodingStatusCode(resp.status);

			  var location = resp.results[0].geometry.location;
			  res.send({status : status, location : location});
		  }

		  else if(error){
		  	
		  }
		})
	}
});

app.post('/', function (req, res) {  
  res.json(req.body);
})


function buildAddressFromBody(body){
	street = body.street.replace(/\s/g, '+');
	city = body.city.replace(/\s/g, '+');
	state = body.state.replace(/\s/g, '+');	

	return street + ',+' + city + ',+' + state;
}


function getGoogleGeocodingStatusCode(status){

	var response = { message: '', code: 0 };

	switch(status){
		case "OK":
			response.message = "Success";
			response.code = 200;
			break;

		case "ZERO_RESULTS":
			response.code = 300;
			response.message = 'Unable to locate lat and long';
		break;

		case "OVER_QUERY_LIMIT":
			response.code = 400;
			response.message = 'Over Query Limit';
		break;

		case "REQUEST_DENIED":
			response.code = 500;
			response.message = 'Request denied';
		break;

		case "INVALID_REQUEST":
			response.code = 600;
			response.message = 'Invalid Request';
		break;

		default:
			response.code = 700;
			response.message = 'Unknown error occured';
			break;
	}

	return response;
}




app.listen(3000);