'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    userid:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
      receivername: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      receivermobilenumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      district: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pincode: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};