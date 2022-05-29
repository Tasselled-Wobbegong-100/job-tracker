const path = require('path');
const express = require('express');
//github sucks
const app = express();

const apiRouter = require('./routes/api');

const PORT = 3000;

//handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//uses /dist for static files in webpack production mode
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../dist')));
}

// Hey Hank, do we need this? Seems like this would be handled with react.
//app entry point
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});


//handles api endpoints in api routes/api.js
app.use('/api', apiRouter);


//unknown route handler
app.use((req, res) => res.status(404).send('page not found'));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// get -> getting all application associated with specific id 

// post -> adding new app save specific app and send back to the front 


//starts server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}.`);
})

module.exports = app;