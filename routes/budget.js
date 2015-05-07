var UserController = require('../userController');
var express = require('express');
var router = express.Router();
var UserModel = require("../models/user");

// Handle a GET request from the client to /budget
router.get('/', function (req, res) {
  console.log('*****/budget route hit');
  var theUser = UserController.getCurrentUser();
  // Is the user logged in?
  if (theUser === null) {
    res.redirect("/");
  } else {
    // Send the user info form back to the client
    res.render('budget', {
       title : 'This is your budget',
       user: theUser
    });
  }
});



// Handle a POST request from the client to /grocery
router.post('/', function (req, res, next) {
  console.log('*****/budget route POST hit', req.body);
  // User is editing an existing item
  if (req.body._id !== "") {
    var theUser = UserController.getCurrentUser();
    console.log('*****/budget route POST hit - theUser: ', theUser);
    // Find it
    UserModel.findOne({ _id: theUser._id }, function (err, user) {
      console.log('*****/budget route POST hit - BUDGET: ', user);
      if (err) {
        sendError(req, res, err, "Could not find the User");
      } else {
        // Found it. Now update the values based on the form POST data.
        user.budget = req.body.budget;

        // Save the updated item.
        user.save(function (err, newOne) {  // this is how you save records to the db: save
          if (err) {
            sendError(req, res, err, "Could not save item with updated information");
          } else {
            UserController.budgetUpdate(req.body.budget);
            res.redirect('/user/profile');
          }
        });
      }
    });

  // User created a new item
  } else {
    res.redirect('/');
  }
});

module.exports = router;
