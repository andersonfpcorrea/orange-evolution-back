'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CourseType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CourseType.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'CourseType',
      tableName: 'course_types',
    }
  );
  return CourseType;
};
