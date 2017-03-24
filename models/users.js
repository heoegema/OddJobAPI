var mongoose = require('mongoose');
Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName:  String,
  lastName: String,
  email: String,
  phone: String,
  password: String
});

module.exports=mongoose.model('user', userSchema);
