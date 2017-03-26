'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('title_club', {
    leagueId: {
      type: DataTypes.INTEGER,
    },
    clubId: {
      type: DataTypes.INTEGER,
    },
    yearsChampionship: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'title_club',
    
    timestamps: false,
  });

  return Model;
};

