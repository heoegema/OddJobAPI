# OddJobAPI
RESTful API that our Odd Jobb app uses to interact with the mongoDB

API can be accessed here: 
http://oddjobbackend.herokuapp.com/

Documentation: 
Posts: 
-Get All Posts
GET: http://oddjobbackend.herokuapp.com/posts

-Get specific post based on unique ID
GET: http://oddjobbackend.herokuapp.com/posts/<UNIQUD ID OF POST here> 

-update post

PUT: http://oddjobbackend.herokuapp.com/posts/<UNIQUE ID OF POST HERE> 

-delete post

DELETE: http://oddjobbackend.herokuapp.com/deletePost/<UNIQUE ID OF POST HERE> 

-create post

POST: http://oddjobbackend.herokuapp.com/newPost?title=<TITLEHERE>&creator=<CREATORHERE>content=<CONTENTHERE>&uniqueID=<UNIQUEIDHERE>&category=<CATEGORYHERE> 


Users: 

-Get all users
GET: http://oddjobbackend.herokuapp.com/users

-Get specific user

GET: http://oddjobbackend.herokuapp.com/users/<emailaddressofuserhere> 

-update user
PUT: http://oddjobbackend.herokuapp.com/users/<emailaddressofuserhere> 

-Create User

POST: http://oddjobbackend.herokuapp.com/newUser?firstName=<FIRSTNAMEHERE>&lastName=<LASTNAMEHERE>&email=<EMAILHERE>&phone=<PHONEHERE>&password=<PASSWORDHERE> 

-delete user

DELETE:http://oddjobbackend.herokuapp.com/deleteUser/<Email address of user here> 


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
  category: String
