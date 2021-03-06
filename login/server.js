//server.js

//get all the tools that we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js'); 

//config

mongoose.connect(configDB.url); //connect to db
// require('./config/passport')(passport);



app.use(morgan('dev')); //log every request to console
app.use(cookieParser()); //read cookies
app.use(bodyParser); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch'}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages storedin session

//routes
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

//lauch
app.listen(port);
console.log('listening at port: ' + port);





































