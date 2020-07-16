const express = require('express');
const router = express.Router();
const dataRoute = require('./dataRoute');
const userRoute = require('./userRoute');

router.use('/data', dataRoute);
router.use('/users', userRoute);

module.exports = router;