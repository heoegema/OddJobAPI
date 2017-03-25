var mongoose = require('mongoose');

Schema = mongoose.Schema;

var postSchema = new Schema({
  title: String,
  creator: String,
  content: String,
  uniqueID: String,
  category: String,
  postalCode: String,
  postDate: String,
  endDate: String
});

mongoose.model('post', postSchema);
