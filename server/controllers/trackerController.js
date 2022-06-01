const db = require('../models/trackerModel.js');
const express = require('express');
const e = require('express');
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



// verify that created user's username isnt in db already
trackerController.checkUsername =  (req,res,next) => {
  const { username, password } = req.body;
  const value = [username, password];
  console.log('value', value)
  // check if fields are empty, if yes return to next piece of middleware
  if(!value[0] || !value[1]){
    res.locals.userValidation = false;
    return next();
  }
  // check in database to see if user is already in 
  db.query(`SELECT * FROM userInfo WHERE username = \'${value[0]}\'`)
    .then((data) => {
      // if username is in db rowCount will be more than 0, set userValidation to false if rowcount is greater than 1
      if(data.rowCount > 0){
        res.locals.userValidation = false;
        return next();
      }else{
        // if user is not in db then set validation to true and move on to next piece of middleware
        res.locals.userValidation = true;
        return next();
      }
    })
    .catch((err) => {
      return next({
        log: 'Error in first trackerController.createdUser',
        message: { err: err },
      });
    });
}


// Creates a new user on signup page
trackerController.createdUser =  (req, res, next) => {
  const { username, password } = req.body;
  const value = [username, password];
  // if locals.userValidation from trackerController.checkUsername is false go to next piece of middleware
  if(!res.locals.userValidation){
    console.log(res.locals.userValidation);
    return next();
  }
  // query to database to insert new user
  const query = 'INSERT INTO userInfo (username, password) VALUES ($1,$2) RETURNING *';
  db.query(query, value)
    .then((data) => {
      res.locals.data = {};
      res.locals.data.user = data.rows[0];
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Error in trackerController.createdUser',
        message: { err: err },
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


trackerController.updateApp = (req,res,next) => {
  console.log('params', req.params);
  const {id} = req.params;
  let query = `UPDATE appInfo SET `
  // iterate through req body looking for column names and values to update
  
  for(let key in req.body){
    console.log(key)
    const temp = `${key}=\'${req.body[key]}\', `;
    query += temp;
  }
  query = query.slice(0,-2);
  query += ` WHERE _id=${id}`;

  console.log('query', query);
  db.query(query)
    .then(updatedAppData => {
      console.log('updated application data', updatedAppData)
      res.locals.updatedApplication = updatedAppData;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught trackerController.updateApp',
        message: { err: err },
      });
    });
}

//deletes app from user applications
trackerController.deleteApp = (req, res, next) => {
  // console.log('in app');
  const { app_id, user_account_id } = req.body;
  const value = [app_id, user_account_id];
  // console.log('app_id', app_id)
  // console.log('user_account_id', user_account_id)
  //appInfo contains
  
  const query = 'DELETE FROM appInfo WHERE appInfo._id=$1 AND appInfo.user_account_id=$2'

  db.query(query, value)
    .then(data => {
      // console.log('in db query', data);
      res.locals.app = app_id;
      return next();
    })
    .catch(err => {
      // console.log(err);
      next({
      log: 'error in deleting app at trackerController',
      message: { err: 'Check delete app ' }
    })});

}





module.exports = trackerController;