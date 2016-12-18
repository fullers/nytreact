// Dependencies
var express = require("express");
var mongoose = require("mongoose");
// Requiring our Note and Article models
var Article = require("./models/Article.js");
// Mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");

mongoose.Promise = Promise;

// Initialize Express
var app = express();

// Make public a static dir
app.use(express.static("public"));

//Database configuration with mongoose
var dbURI = 'mongodb://localhost/nytreact';
if (process.env.NODE_ENV === 'production') {
    dbURI= "mongodb://heroku_203s1p34:onk6g88m8ql98jhh0duu4c0mh8@ds139428.mlab.com:39428/heroku_203s1p34";
}
mongoose.connect(dbURI);
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Routes
// ======

// `*` (get) - will load your single HTML page (with ReactJS) in public/index.html. Make sure you put this after all other GET routes
// Simple index route
app.get("/", function(req, res) {
  res.sendFile('./public/index.html');
});

// `/api/saved` (get) - your components will use this to query MongoDB for all saved articles
app.get("/api/saved", function(req, res) {

    // grab all the articles in the database
    db.articles.find({}).sort({article_pub_date: -1}, function(err, docs) {

    if (err) throw err;

    console.log('getting the articles');

    res.send(docs);

  }); // end db.articles.find()
  
});

// `/api/saved` (post) - your components will use this to save an article to the database
app.post("/api/saved", function(req, res) {

  // save the article object which has the article title, url and publish date to the variable
  var article = req.body;

  // insert the article into the db
  db.articles.insert(article, function(err, docs) {

    if (err) throw err;

    console.log('saved to db');

    res.send(docs);

  }); // end db.articles.insert()

  
});

// `/api/saved` (delete) - your components will use this to delete a saved article in the database
app.delete("/api/saved", function(req, res) {

  // save the article object which has the article id to the variable
  var article = req.body;

  console.log(article);

  // had to use .remove() instead of .deleteOne() but not sure why.
  db.articles.remove({"_id": (mongojs.ObjectId(article.article_id))}, function(err, docs) {
    
    if (err) throw err;

    console.log('article deleted');

    res.send(docs);

  }); // end db.articles.remove()
  
});

// Listen on port Process Enviroment or 3000
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("App running on port "+ PORT + "!");
});