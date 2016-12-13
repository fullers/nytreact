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
    dbURI= "";
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
  res.render("/public/index.html");
});

// `/api/saved` (get) - your components will use this to query MongoDB for all saved articles
app.get("/api/saved", function(req, res) {
  
});

// `/api/saved` (post) - your components will use this to save an article to the database
app.post("/api/saved", function(req, res) {
  
});

// `/api/saved` (delete) - your components will use this to delete a saved article in the database
app.delete("/api/saved", function(req, res) {
  
});

// Listen on port Process Enviroment or 3000
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("App running on port "+ PORT + "!");
});