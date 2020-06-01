'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    categoryid: {
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
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};