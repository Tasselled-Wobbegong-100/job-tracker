const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/', ((req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../dummy_api/remotive.json'));
}));




module.exports = router;