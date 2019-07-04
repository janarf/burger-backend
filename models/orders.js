'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    client_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {});
  Orders.associate = function (models) {
    Orders.hasMany(models.OrderProducts, {
      foreignKey: 'order_id',
    });
    Orders.belongsTo(models.Users, {
      foreignKey: 'user_id',
    });
    Orders.belongsTo(models.Clients, {
      foreignKey: 'client_id',
    });
  };

  return Orders;
};