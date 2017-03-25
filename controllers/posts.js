//This will be our controller for posts (api requests)
var mongoose = require('mongoose'),
post = mongoose.model('post');

exports.getAllPosts = function(req, res) {
  post.find({},function(err, results) {
    return res.send(results);
  });


}
exports.createPost = function(req, res) {
  //create post
  post.create(
   { "title": req.query.title, "creator": req.query.creator, "content": req.query.content, "uniqueID": req.query.uniqueID, "category": req.query.category, "postalCode": req.query.postalCode}

 , function (err) {
   if (err) return console.log(err);
   return res.send(202);
 });

}

exports.editPost = function(req, res) {
  var id = req.params.id;
  var updates = req.body;
  post.update({"uniqueID":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d posts', numberAffected);
      res.send(202);
  });
}

exports.deletePost = function(req, res) {
  var id = req.params.id;
  post.remove({'uniqueID':id},function(result) {
    return res.send(result);
  });


}

exports.deletePostId = function(req, res) {
  var id = req.params.id;
  post.remove({'_id': id}, function(result){
    return res.send(results);

  });

}

exports.findById = function(req, res) {
  var id = req.params.id;
  user.findOne({'uniqueID':id},function(err, result) {
    return res.send(result);
  });

}
