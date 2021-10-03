'use strict';

const { Model } = require('sequelize');
const { Student } = require('./student');
const { Subject } = require('./subject');
module.exports = (sequelize, DataTypes) => {
  class StudentSubjects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {}
  }
  StudentSubjects.init(
    {
      StudentId: {
        type: DataTypes.INTEGER,
        references: {
          model: Student,
          key: 'id',
        },
      },
      SubjectId: {
        type: DataTypes.INTEGER,
        references: {
          model: Subject,
          key: 'id',
        },
      },
      mark: {
        type: DataTypes.INTEGER,
        validate: {
          min: 2,
          max: 5,
          isInt: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'StudentSubjects',
    }
  );
  return StudentSubjects;
};
