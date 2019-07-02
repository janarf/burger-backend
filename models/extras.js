'use strict';
module.exports = (sequelize, DataTypes) => {
  const Extras = sequelize.define('Extras', {
    extra_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    extra_name: DataTypes.STRING,
    extra_imgUrl: DataTypes.STRING,
    extra_price: DataTypes.FLOAT,
  }, {});
  Extras.associate = function (models) {
    Extras.hasMany(models.ProductExtras, {
      foreignKey: 'extra_id',
    })
  };
  return Extras;
};