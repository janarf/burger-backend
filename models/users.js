'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    user_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_type: DataTypes.STRING,
  }, {});
  Users.associate = function (models) {
    Users.hasMany(models.Orders, {
      foreignKey: 'orders_id',
    })
  };
  // Users.create({
  //   user_name: "janaina",
  //   user_email: "janaina@gmail.com",
  //   user_type: "salao",
  // })
  return Users;
};