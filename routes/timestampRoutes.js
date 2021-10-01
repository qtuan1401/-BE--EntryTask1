const express = require('express');
const {
  getTimestamp
} = require('../controllers/logControllers');

const router = express.Router();

router
  .route('/')
  .get(getTimestamp);

module.exports = router;
