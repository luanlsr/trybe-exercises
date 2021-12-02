'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const StoresTable = queryInterface.createTable('Stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
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
    })
    return StoresTable;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('Stores');
  }
};
