

//modules========
var express = require('express');
var app = express();
/

// setting up the port

var port = process.env.PORT || 3000;



// start app ===========
//startup the app at http://localhost:3000

app.get('/', function(request, response){
  response.send("Hey there the server-side is magic");
});

app.listen(port);

// shoutout to the user
console.log("The Back-end magic of Node/express at port " + port);


