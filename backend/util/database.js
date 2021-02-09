const Sequelize = require('sequelize');

const sequelize = new Sequelize('fast_cloud', 'root', '159635gg', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
