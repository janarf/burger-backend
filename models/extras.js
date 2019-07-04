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
  // Extras.create({
  //   extra_name: 'Queijo',
  //   extra_price: 1,
  //   extra_imgUrl: 'https://firebasestorage.googleapis.com/v0/b/burger-queen-jana.appspot.com/o/menu-img%2Fcheese.png?alt=media&token=a25a74fa-bd41-42b4-a32d-fe9bc585af34'
  // });
  // Extras.create({
  //   extra_name: 'Ovo',
  //   extra_price: 1,
  //   extra_imgUrl: 'https://firebasestorage.googleapis.com/v0/b/burger-queen-jana.appspot.com/o/menu-img%2Ffried-egg.png?alt=media&token=338fa654-efc7-4d82-ba26-52ce61ac60ef'
  // });
  return Extras;
};