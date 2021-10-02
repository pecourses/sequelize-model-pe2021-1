'use strict';

const studDbData = [];

for (let i = 0; i < 100; i++) {
  studDbData.push({
    firstName: `Stud${i}`,
    lastName: `Studovich${i}`,
    email: `test${i}@test.test`,
    birthday: new Date(
      2000 + Math.trunc(Math.random() * 20),
      Math.trunc(Math.random() * 11),
      Math.trunc(Math.random() * 29)
    ),
    isMarried: Math.random() > 0.5 ? false : true,
    childrenCount: Math.trunc(Math.random() * 3),
    gender: Math.random() > 0.5 ? 'male' : 'female',
    GroupId: Math.random() > 0.5 ? 1 : 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Students', studDbData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Students', null, {});
  },
};
