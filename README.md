# OddJobAPI
RESTful API that our Odd Jobb app uses to interact with the mongoDB

API can be accessed here: 
http://oddjobbackend.herokuapp.com/

Documentation: 
Posts: 
-Get All Posts
GET: http://oddjobbackend.herokuapp.com/posts

-Get specific post based on unique ID
GET: http://oddjobbackend.herokuapp.com/posts/(postID) 

-update post

PUT: http://oddjobbackend.herokuapp.com/posts/(postID) 

-delete post

DELETE: http://oddjobbackend.herokuapp.com/deletePost/(postID)

-create post

POST: http://oddjobbackend.herokuapp.com/newPost?title=(TITLE)&creator=<(CREATOR)content=(CONTENT)&uniqueID=(ID)&category=(CATEGORY)&postalCode=(POSTALCODE)


Users: 

-Get all users
GET: http://oddjobbackend.herokuapp.com/users

-Get specific user

GET: http://oddjobbackend.herokuapp.com/users/(emailaddress) 

-update user
PUT: http://oddjobbackend.herokuapp.com/users/(emailaddress) 

-Create User

POST: http://oddjobbackend.herokuapp.com/newUser?firstName=(FirstName)&lastName=(LASTNAME)&email=(EMAIL)&phone=(PHONE)&password=(PASSWORD) 

-delete user

DELETE:http://oddjobbackend.herokuapp.com/deleteUser/(emailaddress)  


Schemas: 

Users: 
  firstName:  String,
  lastName: String,
  email: String,
  phone: String,
  password: String


Posts: 
  title: String,
  creator: String,
  content: String,
  uniqueID: String,
  category: String,
  postalCode: String
