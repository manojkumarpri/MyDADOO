
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productids: {
      type: DataTypes.ARRAY(DataTypes.INTEGER), 
      allowNull: false,
    },
    productnames:{
      
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    productcounts:{
      type: DataTypes.ARRAY(DataTypes.INTEGER), 
      allowNull: false,
    },
    productprice: {
      type: DataTypes.ARRAY(DataTypes.INTEGER), 
      allowNull: false,
    },
    totalamount:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productunits:{
      
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    productsize: {
      
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    imageurl: {
      
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    categoryids: {
      type: DataTypes.ARRAY(DataTypes.INTEGER), 
      allowNull: false,
    },
    date:{
      type:  DataTypes.DATE,
      allowNull: false,
    },
    time:{
      type:DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
  };
  return Cart;
};