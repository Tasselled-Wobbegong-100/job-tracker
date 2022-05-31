const db = require('../models/trackerModel');
const express = require('express');
router = express.Router();

const trackerController = {};

//verify user on login
trackerController.verifyUser = (req, res, next) => {

  const credentials = req.headers.authorization.split(' ');
  const username = credentials[0];
  const password = credentials[1];

  const value = [username, password];
  const query = 'SELECT * FROM userInfo WHERE username = $1 AND password = $2'

  db.query(query, value)
    .then(data => {
      if (data.rows[0]){
        res.locals.data = {};
        res.locals.data.user = data.rows[0];
        return next();
      } else {
        return next ('user not found')
      }
    })
    .catch (err => {
      return next('error in trackerController.verifyUser', err);
    })
}


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


//get -> getting all application associated with specific id 
trackerController.returnUser = (req, res, next) => {

  const username = req.params.id;
  const value = [username];

  const query = 'SELECT * FROM userInfo JOIN appInfo ON userInfo._id = appInfo.user_account_id WHERE userInfo.username = ($1)';

  db.query(query, value)
    .then(data => {
      res.locals.apps = data.rows;
      return next();
    })
    .catch(err => next({
      log: 'error in return user at trackerController',
      message: { err: 'Check the return all' }
    }));
};


// post -> adding new app save specific app and send back to the front 
trackerController.createApp = (req, res, next) => {

  console.log(req.body)
  const {
    role_title, 
    company, 
    location, 
    interview_number,
    application_submitted,
    follow_up_deadline,
    job_type,
    salary,
    application_status,
    user_account_id
  } = req.body;

  const value = [role_title, company, location, interview_number, application_submitted, follow_up_deadline, job_type,
    salary, application_status, user_account_id];

  const query = 'INSERT INTO appInfo (role_title, company, location, interview_number, application_submitted, follow_up_deadline, job_type, salary, application_status, user_account_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
  

  db.query(query, value)
    .then((data) => {
      console.log('createApplication', data)
      res.locals.newApp = data.rows[0];
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught trackerController.createdApp',
        message: { err: err },
      });
    });
};

trackerController.currentApp = (req, res, next) => {
  const id = req.params.id;
  const value = [id];
  const query = 'SELECT * FROM appInfo WHERE _id = $1'

  db.query(query, value)
    .then(data => {
      console.log(data.rows);
      res.locals.app = data.rows[0];
      return next()
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught trackerController.createdApp',
        message: { err: err },
      });
    });
}

module.exports = trackerController;