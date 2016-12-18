var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  
  // `title` (Title of the stored article from nytimes.com)
  title: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  // `date` (publish date and time of the article)
  date: {
  	type: Date,
  	required: true,
  	unique: true,
  	dropDups: true
  },
  // url is a required string
  url: {
    type: String,
    unique: true,
    dropDups: true,
    required: true
  }
  
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;