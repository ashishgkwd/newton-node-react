const userService = require('../services/userService');

function greet(req, res) {
  res.send('User says hello');
};

function getUserById(req, res) {
  const userId = req.params.userId;
  res.send(`User with id ${userId} says hello`);
};

function getAllUserData(req, res) {
  const userData = userService.getUserData();
  res.send(userData);
}


module.exports = {
  greet,
  getUserById,
  getAllUserData
}