'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('clubs', {
    name: {
      type: DataTypes.STRING,
    },
    fullName: {
      type: DataTypes.STRING,
    },
    song: {
      type: DataTypes.STRING,
    },
    icon: {
      type: DataTypes.STRING,
    },
    fanbased: {
      type: DataTypes.INTEGER,
    },
    briefHistory: {
      type: DataTypes.STRING,
    },
    officialFanClubs: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'clubs',
    
    timestamps: false,
  });

  return Model;
};

