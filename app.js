var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var env = process.env.NODE_ENV || 'dev';
const sequelize_fixtures = require('sequelize-fixtures');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var http = require('http');
const db = require("./models");
const models = require('./models');

const appConstants = require("./config/appConstants");
const axios = require('axios');


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('gatsby/public'))

// app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

if(env == 'dev' ) {
    db.sequelize.sync().then(function() {
        sequelize_fixtures.loadFile('fixtures/prod_data.json', models).then(function(){
          http.createServer(app).listen(app.get('port'), function() {
              console.log('DEVExpress server listening on port ' + app.get('port'));
          })
        });
    });
} else {
    db.sequelize.sync().then(function() {
        sequelize_fixtures.loadFile('fixtures/prod_data.json', models).then(function(){
          http.createServer(app).listen(app.get('port'), function(){
              console.log('Express server listening on port ' + app.get('port'));
          });
        });
    });
}

