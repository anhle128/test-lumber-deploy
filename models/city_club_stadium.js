'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('city_club_stadium', {
    cityId: {
      type: DataTypes.INTEGER,
    },
    stadiumId: {
      type: DataTypes.INTEGER,
    },
    clubId: {
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'city_club_stadium',
    
    timestamps: false,
  });

  return Model;
};

