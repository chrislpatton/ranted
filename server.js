
// modules ==========
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration =======
  
// config files
var db = require('./config/db');

var port = process.env.PORT || 3030; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// app.get('/messages', function(request,response){
// 	console.log('server recieved a GET request for messages');
// 	ranter1 = {
// 		username: "theRanter",
// 		rant: "I soooo hate traffic",
// 		thumbs: 0
// 	};

// 	ranter2 = {
// 		username: "hater",
// 		rant: "I cant stand people that rant lol",
// 		thumbs: 0
// 	};

// 	ranter3 = {
// 		username: "whyRant",
// 		rant: "Can't stand when my neighbors dog barks while I am asleep, I got to work in the morning",
// 		thumbs: 0
// 	};

// 	var messages =[ranter1,ranter2,ranter3];
// 	response.json(messages);
// });

// routes ==================================================
//require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port); 
console.log('Server running on port ' + port);       // shoutout to the user
exports = module.exports = app;             // expose app