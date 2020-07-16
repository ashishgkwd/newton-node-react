const dataService = require('../services/dataService');

function getData (req, res) {
  res.send('This will be your app data');
};

function getConfig(req, res) {
  const config = dataService.getConfigData();
  console.log('Config: ', config);
  res.send(config);
}

module.exports = {
  getData,
  getConfig
}