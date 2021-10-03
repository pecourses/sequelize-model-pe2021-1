'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Group.hasMany(models.Student, {
        foreignKey: 'groupId',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Group.init(
    {
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          is: /^[A-Z]{4}\d{4}$/,
        },
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      enteredAt: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isBefore: new Date(),
          default: new Date('2021-09-01'),
          isDate: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Group',
    }
  );
  return Group;
};
