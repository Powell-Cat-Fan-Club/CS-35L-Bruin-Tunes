/***************************************************************************
*    Citation
*    Title: MERN Stack Tutorial
*    Author: MongoDB
*    Date: 2022
*    Availability: https://www.mongodb.com/languages/mern-stack-tutorial
*    Usage: Overall framework for record.js, but not all routes
****************************************************************************/
const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

//====================================================
//Artist Pages
//fetching artists (all of them)
recordRoutes.route("/artists").get(function (req, res) {
  let db_connect = dbo.getDb("BruinTunes");
  db_connect
    .collection("Artists")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    }); 
});

//Get artist by ID
recordRoutes.route("/artists/artist/:name").get(function (req, res) {
  let db_connect = dbo.getDb("BruinTunes");
  let myquery = { name:  req.params.name };
  db_connect
      .collection("Artists")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// gets specific album from albums collection, for a specific artist
recordRoutes.route("/artists/artist/:artist/album/:album").get(function (req, res) {
  let db_connect = dbo.getDb("BruinTunes");
  let myquery = { name:  req.params.album, artist:req.params.artist };
  db_connect
      .collection("Albums")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// gets specific song from songs collection, for a specific album
recordRoutes.route("/artists/artist/:artist/album/:album/song/:song").get(function (req, res) {
  let db_connect = dbo.getDb("BruinTunes");
  let myquery = { name:  req.params.song, album: req.params.album };
  db_connect
      .collection("Songs")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

//Get artist by album (case sensitive)
recordRoutes.route("/artists/album/:album").get(function (req, res) {
  let db_connect = dbo.getDb("BruinTunes");
  db_connect.collection("Artists")
  .find({albums:{$elemMatch:{name : req.params.album}}})
  .toArray(function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//Get artist by song (case sensitive)
recordRoutes.route("/artists/song/:song").get(function (req, res) {
  let db_connect = dbo.getDb("BruinTunes");
  db_connect.collection("Artists")
  .find({"albums.songs" : {$elemMatch : {"name" : req.params.song} } } )
  .toArray(function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

recordRoutes.route("/artists/artist/:name/getalbum/:album").get(function (req, res) {
  let db_connect = dbo.getDb("BruinTunes");
  db_connect
  .collection("Artists")
  .findOne({name: req.params.name}, {albums:{$elemMatch:{name : req.params.album}}}, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});


// This section will help you update an artist's likes by id.
recordRoutes.route("/artists/artist/likes/:id").put(function (req, response) {
  let db_connect = dbo.getDb(); 
  let myquery = { _id: ObjectId( req.params.id )};

  let newvalues = {   
    $set: {
      likes: req.body.likes,  
    }, 
   };
  
  db_connect.collection("Artists").updateOne(myquery, newvalues, function (err, obj) {
    if (err) throw err;
    response.json(obj);
  });
 });

//====================================================
//Comments
//Note: will probably be accessed through artist pages, so prob will change route
recordRoutes.route("/comments").get(function (req, res) {
  let db_connect = dbo.getDb("BruinTunes");

  db_connect
    .collection("Comments")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    }); 
});


//change the routing once comments implemented
//Gets comment by ID
recordRoutes.route("/comments/:id").get(function (req, res) {
  let db_connect = dbo.getDb("BruinTunes");
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("Comments")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

//probably will change this slightly once comments are actually implemented
//Creates a new comment
recordRoutes.route("/comments/add").post(function (req, response) {
  let db_connect = dbo.getDb("BruinTunes");
  let myobj = {
    username: req.body.username,
    comment: req.body.comment,
    timestamp: new Date()
  };
  console.log(myobj);
  db_connect.collection("Comments").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a comment by id.
recordRoutes.route("/comments/update/:id").put(function (req, response) {
  let db_connect = dbo.getDb(); 
  let myquery = { _id: ObjectId( req.params.id )};

  let newvalues = {   
    $set: {     
      username: req.body.username,    
      comment: req.body.comment, 
      timestamp: new Date()
    }, 
   };
  
  db_connect.collection("Comments").updateOne(myquery, newvalues, function (err, obj) {
    if (err) throw err;
    response.json(obj);
  });
 });
  
 // This section will help you delete a comment
 recordRoutes.route("/comments/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("Comments").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 comment deleted");
    response.json(obj);
  });
 });

//====================================================
//Lists
//Will change routing depending on implementation
//gets an array of all of the lists
recordRoutes.route("/lists").get(function (req, res) {
  let db_connect = dbo.getDb("BruinTunes");
  db_connect
    .collection("Lists")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    }); 
});

//Gets list by ID
recordRoutes.route("/lists/:id").get(function (req, res) {
  let db_connect = dbo.getDb("BruinTunes");
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("Lists")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

//Creates a new list
recordRoutes.route("/lists/add").post(function (req, response) {
  let db_connect = dbo.getDb("BruinTunes");
  let myobj = {
    username: req.body.username,    
    userList: req.body.userList, 
  };
  db_connect.collection("Lists").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a list by id.
recordRoutes.route("/lists/update/:id").put(function (req, response) {
  let db_connect = dbo.getDb(); 
  let myquery = { _id: ObjectId( req.params.id )};

  let newvalues = {   
    $set: {     
      username: req.body.username,    
      userList: req.body.userList,  
    }, 
   };
  
  db_connect.collection("Lists").updateOne(myquery, newvalues, function (err, obj) {
    if (err) throw err;
    response.json(obj);
  });
 });
  
 // This section will help you delete a list
 recordRoutes.route("/lists/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("Lists").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 list deleted");
    response.json(obj);
  });
 });

//====================================================
//Login
//Will change routing depending on implementation
//gets all users (returns an array)
recordRoutes.route("/login").get(function (req, res) {
  let db_connect = dbo.getDb("BruinTunes");
  db_connect
    .collection("Users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    }); 
});

//Gets user by ID
recordRoutes.route("/login/:id").get(function (req, res) {
  let db_connect = dbo.getDb("BruinTunes");
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("Users")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

//Creates a new user
recordRoutes.route("/login/add").post(function (req, response) {
  let db_connect = dbo.getDb("BruinTunes");
  let myobj = {
    username: req.body.username,    
    password: req.body.password,
  };
  db_connect.collection("Users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a user by id.
recordRoutes.route("/login/update/:id").put(function (req, response) {
  let db_connect = dbo.getDb(); 
  let myquery = { _id: ObjectId( req.params.id )};

  let newvalues = {   
    $set: {     
      username: req.body.username,    
      password: req.body.password,
    }, 
   };
  
  db_connect.collection("Users").updateOne(myquery, newvalues, function (err, obj) {
    if (err) throw err;
    response.json(obj);
  });
 });

 //this route updates the user's logged in status
 recordRoutes.route("/loggedin/:id").put(function (req, response) {
  let db_connect = dbo.getDb(); 
  let myquery = { _id: ObjectId( req.params.id )};

  let newvalues = {   
    $set: {
      isloggedin: req.body.isloggedin,  
    }, 
   };
  
  db_connect.collection("Users").updateOne(myquery, newvalues, function (err, obj) {
    if (err) throw err;
    response.json(obj);
  });
 });
  
 // This section will help you delete a user
 recordRoutes.route("/login/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("Users").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 user deleted");
    response.json(obj);
  });
 });

//gets the logged in user
recordRoutes.route("/loggedinuser").get(function (req, res) {
  let db_connect = dbo.getDb("BruinTunes");
  let myquery = { isloggedin : true};
  db_connect
      .collection("Users")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

module.exports = recordRoutes;