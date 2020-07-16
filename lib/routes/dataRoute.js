const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataContoller');


// define the home page route
router.get('/', dataController.getData);

router.get('/config', dataController.getConfig);


module.exports = router;