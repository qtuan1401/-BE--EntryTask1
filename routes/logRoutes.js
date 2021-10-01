const express = require('express');
const {
  getLogs,
  createLog,
} = require('../controllers/logControllers');

const router = express.Router();

router
  .route('/')
  .get(getLogs)
  .post(createLog);
  
module.exports = router;
