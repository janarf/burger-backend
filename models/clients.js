'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define('Clients', {
    client_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    client_name: DataTypes.STRING,
  }, {});

  Clients.associate = function (models) {
    Clients.hasMany(models.Orders, {
      foreignKey: 'client_id',
    })
  };
  return Clients;
};