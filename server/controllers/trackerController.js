const db = require('../models/trackerModel');
const express = require('express');
router = express.Router();

const trackerController = {};

// Creates a new user on signup page
trackerController.createdUser = (req, res, next) => {
  const { username, password } = req.body;
  const value = [username, password];

  const query = 'INSERT INTO userInfo (username, password) VALUES ($1,$2)';

  db.query(query, value)
    .then((data) => {
      console.log('createUser:, ', data.rows);
      res.locals.createdUser = data.rows[0];
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught trackerController.createdUser',
        message: { err: 'Check the log' },
      });
    });
};


// Return all users and their applications
trackerController.returnUser = (req, res, next) => {
  const query = 'SELECT * FROM userInfo';
  //const { username } = req.body;
  //console.log("I am here at return user")
  db.query(query)
    .then(data => {
      // if (data.username === username) {
      //console.log(data.rows)
      res.locals.returnUser = data.rows;
      return next();
    })
    // return next(err);
    //})
    .catch(err => next({
      log: 'error in return all at trackerController',
      message: { err: 'Check the return all' }
    }));
};

module.exports = trackerController;