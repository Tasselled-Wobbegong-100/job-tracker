const express = require('express');

const trackerController = require('../controllers/trackerController');

const router = express.Router();

router.post("/signup", trackerController.checkUsername, trackerController.createdUser, (req, res) => {
  // if username in db already
  if(res.locals.userValidation === false){
    return res.sendStatus(400)
  }
  // if username is not in db
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


router.patch('/updateApp/:id', trackerController.updateApp, (req, res) => {
  return res.status(200).json(res.locals.updatedApplication)
})

router.delete("/deleteApp", trackerController.deleteApp, (req, res) => {
  return res.status(200).json(res.locals.app)
})

module.exports = router;