'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Student.belongsTo(models.Group);
    }
    // One-to-many: foreign key autocreate
    // onDelete, onUpdate - hasMany
  }

  // Ограничения прописываем на уровне модели и миграции (выполняются в СУБД)
  // Валидацию прописываем на уровне модели (выполняется на сервере:
  //   если валидация пройдена успешно, то генерируется запрос к СУБД)

  // defaultValue

  // allowNull - ограничение + валидация
  // unique - ограничение
  // primaryKey - ограничение
  // validate - валидация

  // autoIncrement
  Student.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]{1,29}$/,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]{1,29}$/,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      birthday: {
        type: DataTypes.DATEONLY,
      },
      isMarried: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      childrenCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          min: 0,
          isInt: true,
        },
      },
      gender: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Student',
    }
  );

  return Student;
};
