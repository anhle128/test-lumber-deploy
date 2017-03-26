'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('club_contact_info', {
    idClub: {
      type: DataTypes.INTEGER,
    },
    idSocial: {
      type: DataTypes.INTEGER,
    },
    url: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'club_contact_info',
    
    timestamps: false,
  });

  return Model;
};

