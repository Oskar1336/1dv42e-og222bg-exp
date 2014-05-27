
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var nano = require("nano")("http://localhost:5984");
var db = nano.use("test");

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
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

require("./routes")(app);
require("./routes/create")(app, db, nano);
require("./routes/find")(app, db);
require("./routes/remove")(app, db);
require("./routes/update")(app, db);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
