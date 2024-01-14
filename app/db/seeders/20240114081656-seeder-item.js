'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Items', [
      {
        name: 'oop js',
        TodoId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'oop python',
        TodoId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});

  }
};
