const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// default route
router.get('/', userController.greet);

// route for fetching all user data
router.get('/all', userController.getAllUserData);

// route for fetching user by ID
router.get('/:userId', userController.getUserById);


module.exports = router;