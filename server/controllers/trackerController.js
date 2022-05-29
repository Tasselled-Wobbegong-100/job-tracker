const db = require('../models/trackerModel');
const express = require('express');
router = express.Router();

const trackerController = {};

// Creates a new user on signup page
trackerController.createdUser = (req, res, next) => {
<<<<<<< HEAD
  const { username, password } = req.body;
  const value = [username, password];

  const query = 'INSERT INTO userInfo (username, password) VALUES ($1,$2)';
=======
  const {username, password } = req.body;
  const value = [username, password];

  const query = 'INSERT INTO userInfo (username, password) VALUES ,$2)';
>>>>>>> dev

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


//get -> getting all application associated with specific id 
trackerController.returnUser = (req, res, next) => {
  const {username} = req.body;
  const value = [username];

  const query = 'SELECT * FROM userInfo JOIN appInfo ON userInfo._id = appInfo.user_account_id WHERE userInfo.username = ($1)';

  db.query(query, value)
    .then(data => {
      res.locals.returnUser = data.rows;
      return next();
    })
    .catch(err => next({
      log: 'error in return user at trackerController',
      message: { err: 'Check the return all' }
    }));
};


// post -> adding new app save specific app and send back to the front 
trackerController.createApp = (req, res, next) => {

  const {role_title ,company ,location ,interview_number, application_submitted, follow_up_deadline,job_type ,
    salary,application_status,user_account_id} = req.body;

  const value = [role_title ,company ,location ,interview_number, application_submitted, follow_up_deadline,job_type ,
    salary,application_status,user_account_id];

  const query = 'INSERT INTO appInfo (role_title, company, location, interview_number, application_submitted, follow_up_deadline, job_type, salary, application_status, user_account_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
  

  db.query(query, value)
    .then((data) => {
      res.locals.newApp = data.rows[0];
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught trackerController.createdApp',
        message: { err: 'Check the log' },
      });
    });
};

module.exports = trackerController;