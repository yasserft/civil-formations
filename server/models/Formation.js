const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Formation = sequelize.define('Formation', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duree: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.DOUBLE
  },
  image: {
    type: DataTypes.STRING
  },
  video: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'Formation',
  timestamps: false
});

module.exports = Formation;
