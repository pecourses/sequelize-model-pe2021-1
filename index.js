const { Student } = require('./models');

(async function () {
  const newStudent = {
    firstName: 'Stud1',
    lastName: 'Studovich1',
    email: 'test@test.test',
    birthday: '2004-08-30',
    isMarried: false,
    childrenCount: 0,
    gender: 'male',
  };
  // INSERT INTO "Students" ("id","firstName","lastName","email","birthday","isMarried","childrenCount","gender","createdAt","updatedAt")
  // VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING "id","firstName","lastName","email","birthday","isMarried","childrenCount","gender","createdAt","updatedAt"
  // const createdStudent = await Student.create(newStudent, { raw: true });
  // console.log(`createdStudent`, createdStudent.dataValues);

  const foundStudents = await Student.findAll({ raw: true });
  console.log(`foundStudents`, foundStudents);
})();
