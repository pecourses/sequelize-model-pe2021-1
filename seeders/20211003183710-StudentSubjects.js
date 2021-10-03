'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'StudentSubjects',
      [
        {
          StudentId: 1,
          SubjectId: 1,
          mark: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StudentId: 1,
          SubjectId: 2,
          mark: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StudentId: 2,
          SubjectId: 1,
          mark: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StudentId: 2,
          SubjectId: 2,
          mark: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('StudentSubjects', null, {});
  },
};
