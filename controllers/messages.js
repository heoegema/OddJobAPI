var mongoose = require('mongoose'),
message = mongoose.model('message');

exports.add = function(req, res) {
  message.create(
   { "name": req.query.name, "message": req.query.message, "personSent": req.query.personSent, "id": req.query.id, "email": req.query.email}

 , function (err) {
   if (err) return console.log(err);
   return res.send(202);
 });

}

exports.findById = function(req, res) {
  var id = req.params.id;
  message.findOne({'id':id},function(err, result) {
    return res.send(result);
  });

}

exports.findAll = function(req, res) {
  message.find({},function(err, results) {
    return res.send(results);
  });


}

exports.delete = function(req, res) {
  var id = req.params.id;
  message.remove({'_id': id}, function(result){
    return res.send(result);
  });

};
