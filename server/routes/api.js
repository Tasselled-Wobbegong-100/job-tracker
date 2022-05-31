const express = require('express');

const trackerController = require('../controllers/trackerController');

const router = express.Router();

router.post("/signup", trackerController.createdUser, (req, res) => {
  return res.status(200).json(res.locals.data);
})

// return all applications related to one user
router.get("/login", trackerController.verifyUser, (req, res) => {
  return res.status(200).json(res.locals.data)
})

router.get('/getApps/:id', trackerController.returnUser, (req, res) => {
  return res.status(200).json(res.locals.apps)
})

router.get('/currentApp/:id', trackerController.currentApp, (req, res) => {
  return res.status(200).json(res.locals.app)
})

router.post("/newApp", trackerController.createApp, (req, res) => {
  return res.status(200).json(res.locals.newApp);
})

module.exports = router;