'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductOptions = sequelize.define('ProductOptions', {
    productOption_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    orderProduct_id: DataTypes.INTEGER,
    option_id: DataTypes.INTEGER,
  }, {});
  ProductOptions.associate = function (models) {
    ProductOptions.belongsTo(models.OrderProducts, {
      foreignKey: 'orderProduct_id',
    });
    ProductOptions.belongsTo(models.Options, {
      foreignKey: 'option_id',
    });

  };
  return ProductOptions;
};