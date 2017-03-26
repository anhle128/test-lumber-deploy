'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('stadiums', {
    name: {
      type: DataTypes.STRING,
    },
    icon: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'stadiums',
    
    timestamps: false,
  });

  return Model;
};

