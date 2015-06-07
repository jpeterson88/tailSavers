var connect = require('connect')
  //, express = require('express')
  //, routes = require('./routes')
  , http = require('http')
  , serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);