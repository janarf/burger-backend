'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductExtras = sequelize.define('ProductExtras', {
    productExtra_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    orderProduct_id: DataTypes.INTEGER,
    extra_id: DataTypes.INTEGER,
  }, {});
  ProductExtras.associate = function (models) {
    ProductExtras.belongsTo(models.OrderProducts, {
      foreignKey: 'orderProduct_id',
    });
    ProductExtras.belongsTo(models.Extras, {
      foreignKey: 'extra_id',
    })
  };
  // ProductExtras.create({
  //   orderProduct_id: 3,
  //   extra_id: 2

  // })
  return ProductExtras;
};