var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressSession = require("express-session");
const passport = require('passport');
const userModel = require("./routes/users"); // replace './models/user' with the actual path to your users.js file
// app.use(express.static('public'));



// ye upr static wala comment kiya tha koi dikkat hoe toh uncomment krdena



const passportLocalMongoose  = require('passport-local-mongoose')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressSession({
  resave:false,
  saveUninitialized:false,
  secret:"kyabatbeta"
}))
//is above code ki wajah se server data hold krpaega (ham allow krrhe hai ki session data store krpaye)
 
app.use(passport.initialize());// ye wali line passport ko start krdeti hai aur bolti hai ki hey prabhu aap authentcation and authorisation perform kro
app.use(passport.session()); // is line ki wajh se session create horha hai 
passport.serializeUser(usersRouter.serializeUser());
passport.deserializeUser(usersRouter.deserializeUser());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
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

