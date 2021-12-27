var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors=require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require("mongoose");
var session = require('express-session')
var config =require("config")
var indexRouter = require('./routes/index');
var coursesRouter = require('./routes/courses');
var registrationRouter = require('./routes/registrations');
var queriesRouter = require('./routes/queries');
var userRouter = require('./routes/user');
var sessionAuth= require("./middlewares/sesionAuth")
var checkSessionAuth= require("./middlewares/checkSessionAuth")

var app = express();
app.use(cors());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
  cookie: { maxAge: 6000 }
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(sessionAuth);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/courses', coursesRouter);
app.use('/registrations', registrationRouter);
app.use('/queries', queriesRouter);
app.use('/', userRouter);




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
mongoose.connect(config.get("db"),{
  useNewUrlParser: true,
  
})
.then(()=>console.log("connected to mngo.."))
.catch((error)=>console.log(error.message));
module.exports = app;
