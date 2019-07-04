'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProducts = sequelize.define('OrderProducts', {
    orderProduct_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
  }, {});
  OrderProducts.associate = function (models) {
    OrderProducts.belongsTo(models.Products, {
      foreignKey: 'product_id',
    });
    OrderProducts.belongsTo(models.Orders, {
      foreignKey: 'order_id',
    });
    OrderProducts.hasMany(models.ProductExtras, {
      foreignKey: 'orderProduct_id',
    });
    OrderProducts.hasMany(models.ProductOptions, {
      foreignKey: 'orderProduct_id',
    });
  };
  // OrderProducts.create({
  //   order_id: 2,
  //   product_id: 5
  // })
  return OrderProducts;
};