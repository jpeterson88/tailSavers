var connect = require('connect')
  , express = require('express')
  , http = require('http')
  , request = require('request')
  , serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);



var app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.get('/', function (req, res) {
  res.send('Hello World!');
});



//response.send(request);
	//build querystring

	console.log(request.body);
	//console.log(request.params.city);
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