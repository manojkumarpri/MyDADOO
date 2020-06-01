module.exports = (sequelize, DataTypes) => {
  const Advertisement = sequelize.define('Advertisement', {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageurl:{
      
      type: DataTypes.STRING, 
      get: function() {
          return JSON.parse(this.getDataValue('imageurl'));
      }, 
      set: function(val) {
          return this.setDataValue('imageurl', JSON.stringify(val));
      },
    allowNull: false
      },
    expirytime:  {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Advertisement.associate = function(models) {
    // associations can be defined here
  };
  return Advertisement;
};