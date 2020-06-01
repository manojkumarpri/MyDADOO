'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define('SubCategory', {
    categoryid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subcategoryid:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    noofproducts: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productids: {
      type: DataTypes.ARRAY(DataTypes.INTEGER), 
      allowNull: false,
    },
    imgurl: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  SubCategory.associate = function(models) {
    // associations can be defined here
  };
  return SubCategory;
};