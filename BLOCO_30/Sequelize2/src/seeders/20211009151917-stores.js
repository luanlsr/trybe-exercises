'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stores', [
      {
        name: 'Magazine Luiza',
        description: 'Loja varejista',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Casa e Vídeo',
        description: 'Loja de variedades',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Stores', null, {})
  }
};
