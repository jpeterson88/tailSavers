var connect = require('connect')
  , express = require('express')
  , http = require('http')
  , serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);



var app = express();
var server = app.listen(3000);
var io = require('socket.io').listen(server); // this tells socket.io to use our express server


io.sockets.on('connection', function (socket) {
    console.log('A new user connected!');
    socket.emit('info', { msg: 'The world is round, there is no up or down.' });
});