
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var Db = require("mongodb").Db;
var Server = require('mongodb').Server;
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var db = new Db("mongodbexp", new Server("localhost", "27017"));

require("./routes/create")(app, db);
// require("./routes/get");
// require("./routes/delete");
// require("./routes/edit");

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
