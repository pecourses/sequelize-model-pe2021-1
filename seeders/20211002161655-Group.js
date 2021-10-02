'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Groups',
      [
        {
          code: 'ITIT2021',
          department: 'Software Dev',
          enteredAt: new Date(2021, 8, 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'ITIT2020',
          department: 'Software Dev',
          enteredAt: new Date(2020, 8, 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Groups', null, {});
  },
};
