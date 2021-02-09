const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Repository = sequelize.define('repository', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  data: Sequelize.BLOB('long')
},
{
  timestamps: false,
});

module.exports = Repository;