'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Subjects',
      [
        {
          name: 'Math',
          description: 'All mathematics',
          hours: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Phisics',
          description: 'All phisical lows',
          hours: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Subjects', null, {});
  },
};
