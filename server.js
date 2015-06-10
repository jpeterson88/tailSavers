var connect = require('connect')
  , express = require('express')
  , http = require('http')
  , request = require('request')
  , serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);



var app = express();


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/getcoords', function (request, response) {

response.send(request);
	//build querystring
	//request.params.street
    //request.params.City
    //request.params.State


//	request('https://maps.googleapis.com/maps/api/geocode/xml?address=' + querystring + '=AIzaSyDm4xGlr4ptZ-7Cx8OGqfDQy-6DBBjrEbQ', function (error, response, body) {
 //	 if (!error && response.statusCode == 200) {
	//	    console.log(body) // Show the HTML for the Google homepage.
  //}
  
});

app.get('/derp', function (req, res) {
  res.send(rq);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});