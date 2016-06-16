// require express
var express = require("express");
// path module -- try to figure out where and why we use this
// require body-parser
var bodyParser = require('body-parser');
// use it!
var path = require("path");
// create the express app
var app = express();
// static content
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})

// post route for adding a userz
app.post('/users', function(req, res) {
  var name = req.body.name;
  var location = req.body.location;
  var languages = req.body.languages;
  var comment = req.body.comment;
  var users = {name:name, location:location, languages:languages, comment:comment};

 console.log("POST DATA \n\n", req.body);

 // This is where we would add the user to the database
 // Then redirect to the root route
 res.render('dojoinfo', {users:users});
})
// app.get('/quotes', function(req, res) {
//  res.render("quotes");
// })
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
})
