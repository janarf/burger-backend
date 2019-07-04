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
  // Options.create({
  //   option_name: 'Frango',
  //   option_imgUrl: 'https://firebasestorage.googleapis.com/v0/b/burger-queen-jana.appspot.com/o/menu-img%2Fchicken.png?alt=media&token=f89d561c-fbc6-4a87-a72e-2baa3d6e21f7'
  // })
  // Options.create({
  //   option_name: 'Boi',
  //   option_imgUrl: 'https://firebasestorage.googleapis.com/v0/b/burger-queen-jana.appspot.com/o/menu-img%2Fbeef.png?alt=media&token=2ed21b89-9f2d-413d-827d-9c36ce7ce721'
  // })
  // Options.create({
  //   option_name: 'Vegetariano',
  //   option_imgUrl: 'https://firebasestorage.googleapis.com/v0/b/burger-queen-jana.appspot.com/o/menu-img%2Fvegetables.png?alt=media&token=be54a554-2375-42eb-afeb-7fd08d5a9006'
  // })
  return Options;
};