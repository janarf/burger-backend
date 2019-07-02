'use strict';
module.exports = (sequelize, DataTypes) => {
  const Options = sequelize.define('Options', {
    option_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    option_name: DataTypes.STRING,
    option_imgUrl: DataTypes.STRING,
  }, {});
  Options.associate = function (models) {
    Options.hasMany(models.ProductOptions, {
      foreignKey: 'option_id',
    })
  };
  return Options;
};