'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderid:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
    }, 
    time:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderproductids: {
      type: DataTypes.ARRAY(DataTypes.INTEGER), 
      allowNull: false,
    },
    orderproductnames:{
      
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    orderproductunit:{
      
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    orderproductsize:{
      
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    productprice: {
      type: DataTypes.ARRAY(DataTypes.INTEGER), 
      allowNull: false,
    },
    totalamount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orderproductcount:{
      type: DataTypes.ARRAY(DataTypes.INTEGER), 
      allowNull: false,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    invoicenumber:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};