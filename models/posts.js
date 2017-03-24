var mongoose = require('mongoose');

Scheme = mongoose.Schema;

var postSchema = new Schema({
  title: String,
  creator: String,
  content: String,
  uniqueID: String,
  category: String
});

mongoose.model('post', postSchema);
