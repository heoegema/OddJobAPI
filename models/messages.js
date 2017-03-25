var mongoose = require('mongoose');

Schema = mongoose.Schema;

var messageSchema = new Schema({
  name: String,
  email: String,
  message: String,
  personSent: String,
  id: String
});

mongoose.model('message', messageSchema);
