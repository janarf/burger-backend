'use strict';
// const menuData = require('../menuData')

module.exports = (sequelize, DataTypes) => {

  const Products = sequelize.define('Products', {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    product_name: DataTypes.STRING,
    product_imgUrl: DataTypes.STRING,
    product_breakfast: DataTypes.BOOLEAN,
    product_price: DataTypes.FLOAT,
  }, {});
  Products.associate = function (models) {
    Products.hasMany(models.OrderProducts, {
      foreignKey: 'product_id',
    })
  };
  // menuData.map(menuItem => {
  //   Products.create({
  //     product_name: menuItem.name,
  //     product_imgUrl: menuItem.imgUrl,
  //     product_breakfast: menuItem.breakfast,
  //     product_price: menuItem.price,
  //   })
  // })
  return Products;
};