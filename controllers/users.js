//This will be our controller for users
var mongoose = require('mongoose'),
user = mongoose.model('user');
exports.findAll = function(req, res) {
  user.find({},function(err, results) {
    return res.send(results);
  });

};

exports.findById = function(req, res) {
  var email = req.params.id;
  user.findOne({'email':email},function(err, result) {
    return res.send(result);
  });

};

exports.add = function(req, res) {
  console.log(req.query);
  user.create(
   { "firstName": req.query.firstName, "lastName": req.query.lastName, "email": req.query.email, "phone": req.query.phone, "password": req.query.password }

 , function (err) {
   if (err) return console.log(err);
   return res.send(202);
 });

};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;
  user.update({"email":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d posts', numberAffected);
      res.send(202);
  });

};

exports.delete = function(req, res) {
  var email = req.params.id;
  user.remove({'email':email},function(result) {
    return res.send(result);
  });



};
