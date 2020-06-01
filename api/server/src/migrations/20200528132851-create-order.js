'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderid: {
        type: Sequelize.STRING
      },
      orderDate: {
        type: Sequelize.DATE
      },
      time: {
        type: Sequelize.STRING
      },
      orderproductids: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      orderproductnames: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      orderproductunit: {
        type:Sequelize.ARRAY(Sequelize.STRING)
      },
      orderproductsize: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      productprice: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      totalamount: {
        type: Sequelize.INTEGER   
      },
      orderproductcount: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      userid: {
        type: Sequelize.INTEGER
      },
      invoicenumber: {
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
    return queryInterface.dropTable('Orders');
  }
};