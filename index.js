const { Student, Group, sequelize } = require('./models');
const { Op } = require('sequelize');
const student = require('./models/student');

(async function () {
  // await sequelize.sync({ force: true });

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

  // C - INSERT
  // const createdStudent = await Student.create(newStudent);
  // console.log(`createdStudent`, createdStudent.dataValues);

  // R - SELECT
  // const foundStudents = await Student.findAll({ raw: true });

  // Пагинация +
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   limit: 10,
  //   offset: 0,
  //   order: [['id', 'DESC']],
  // });

  // Отобрать 10 студентов (2-ю странице), упорядоченных по количеству детей (по возрастанию).
  // Если количество детей совпадает, то упорядочить по имени (по убыванию)

  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   offset: 10,
  //   limit: 10,
  //   order: ['childrenCount', ['firstName', 'DESC']],
  // });

  // Фильтрация

  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: {
  //     childrenCount: 0,
  //   },
  //   offset: 0,
  //   limit: 5,
  // });

  // AND
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: {
  //     childrenCount: 0,
  //     isMarried: false,
  //   },
  //   offset: 0,
  //   limit: 5,
  // });

  // OR
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: {
  //     [Op.or]: [{ id: 1 }, { id: 2 }],
  //   },
  //   offset: 0,
  //   limit: 5,
  // });

  // <>
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: {
  //     childrenCount: {
  //       [Op.ne]: 0,
  //     },
  //   },
  //   offset: 0,
  //   limit: 5,
  // });

  // >
  // Отобразить студентов, у которых больше 1 ребенка
  // const foundStudents = await Student.findAll({
  //   where: {
  //     childrenCount: { [Op.gt]: 1 },
  //   },
  //   raw: true,
  //   offset: 0,
  //   limit: 5,
  // });

  // Like
  // Найти студентов с именем Stud1.........
  // const foundStudents = await Student.findAll({
  //   where: {
  //     firstName: { [Op.like]: 'Stud1%' },
  //   },
  //   raw: true,
  //   offset: 0,
  //   limit: 5,
  // });

  // Проекция
  // что отобразить
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: ['firstName', 'lastName'],
  // });

  // что исключить
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: { exclude: ['email'] },
  // });

  // выводим результат функции + AS
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: [
  //     ['firstName', 'name'],
  //     'lastName',
  //     [sequelize.fn('age', sequelize.col('birthday')), 'stud_age'],
  //   ],
  // });

  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: {
  //     include: [sequelize.fn('age', sequelize.col('birthday'))],
  //   },
  // });

  // EXTRACT (year FROM рез.ф-и)

  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: {
  //     include: [sequelize.literal(`EXTRACT (year FROM  age(birthday))`)],
  //   },
  // });

  // Группировка

  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: ['gender', sequelize.fn('count', sequelize.col('id'))],
  //   group: 'gender',
  //   having: sequelize.literal(`count(id)>50`),
  // });

  // console.log(`foundStudents`, foundStudents);

  // U - update

  // const updatedStudents = await Student.update(
  //   { firstName: 'Ira' },
  //   { where: { id: 98 }, returning: true, raw: true }
  // );
  // console.log(`updatedStudents`, updatedStudents);

  // D - destroy

  // const deletedStudents = await Student.destroy({
  //   where: { id: 97 },
  //   // returning: true,
  //   // raw: true,
  // });

  // console.log(`deletedStudents`, deletedStudents);

  // Создать модель для группы (шифр группы, дата набора(зачисления))
  // Создать модель для учебной дисциплины (название, описание, количество часов)

  // Magic Methods
  // One-To-Many
  // Group-To-Student

  // belongsTo => student.getGroup()
  const [stud1] = await Student.findAll({ where: { id: 101 } });
  const groupOfStud1 = await stud1.getGroup();

  console.log(`groupOfStud1`, groupOfStud1);

  // hasMany => group.getStudents()
  const [group1] = await Group.findAll({ where: { id: 1 } });
  const studsOfGroup1 = await group1.getStudents();

  console.log(`studsOfGroup1`, studsOfGroup1);
})();
