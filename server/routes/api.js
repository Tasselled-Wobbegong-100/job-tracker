const express = require('express');

const trackerController = require('../controllers/trackerController');

const router = express.Router();

router.post("/signup", trackerController.createdUser, (req, res) => {
  res.send(200).json(res.locals.createdUser);
})

// get route that get specific user from DB - now just returns all users
router.get("/login", trackerController.returnUser, (req, res) => {
  //res.send(200).json(res.locals.returnUser);
  // res.status(200).send(res.locals.returnUser);
  return res.status(200).json(res.locals.returnUser)
})

module.exports = router;