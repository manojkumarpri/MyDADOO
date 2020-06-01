module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.INTEGER
      },
      productids: {
        type:  Sequelize.ARRAY(Sequelize.INTEGER)
      },
      productnames:{
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      productcounts: {
        type:  Sequelize.ARRAY(Sequelize.INTEGER)
      },
      productprice: {
        type:  Sequelize.ARRAY(Sequelize.INTEGER)
      },
      totalamount: {
        type: Sequelize.INTEGER
      },
      productunits:{
        type:   Sequelize.ARRAY(Sequelize.STRING)
      },
      productsize:{
        type:  Sequelize.ARRAY(Sequelize.STRING)
      },
      imageurl:{
        type:   Sequelize.ARRAY(Sequelize.STRING)
      },
      categoryids: {
        type:   Sequelize.ARRAY(Sequelize.STRING)
      },
      date: {
        type: Sequelize.DATE
      },
      time: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Carts');
  }
};