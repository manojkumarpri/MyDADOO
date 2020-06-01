'use strict';
module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    noofcategories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryids: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    nooforders: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Store.associate = function(models) {
    // associations can be defined here
  };
  return Store;
};