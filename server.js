
var mongoose = require('mongoose');
var uri = "mongodb://admin:P%40ssword.123@oddjobb-shard-00-00-womce.mongodb.net:27017,oddjobb-shard-00-01-womce.mongodb.net:27017,oddjobb-shard-00-02-womce.mongodb.net:27017/main?ssl=true&replicaSet=OddJobb-shard-0&authSource=admin";
mongoose.connect(uri);
var db = mongoose.connection;
var user = require('./models/users');
var post = require('./models/posts');
var messages = require('./models/messages');
var express = require('express');
var app = express();

var users = require('./controllers/users');
var posts = require('./controllers/posts');
var messages = require('./controllers/messages');
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

app.configure(function(){
    app.use(express.bodyParser());
});

//get all users
app.get('/users', users.findAll);

//find user with a specific email
app.get('/users/:id', users.findById);

//add a user
app.post('/newUser', users.add);

//update users
app.put('/users/:id', users.update);

//edit post
app.put('/updatePost/:id', posts.editPost);
//deletes a post
app.delete('/deletePost/:id', posts.deletePost);

app.delete('/deletePostId/:id', posts.deletePostId);

app.delete('/deleteUser/:id', users.delete);

//Gets all posts
app.get('/posts', posts.getAllPosts);

app.get('/posts/:id', posts.findById);
//create post
app.post('/newPost', posts.createPost)

app.delete('/deleteMessage/:id', messages.delete);
//create new message
app.post('/newMessage', messages.add);

//get all messages
app.get('/messages', messages.findAll);

//get message by Id
app.get('/messages/:id', messages.findById);

app.listen(process.env.PORT || 3001);
console.log("Jammin\' on port 3001...");
