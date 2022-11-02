'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: DataTypes.INTEGER,
        references: {
          model: 'CourseType',
          key: 'id',
        },
      },
      author: {
        type: DataTypes.INTEGER,
        references: {
          model: 'ContentAuthor',
          key: 'id',
        },
      },
      length: DataTypes.DATE,
      status: {
        type: DataTypes.INTEGER,
        references: {
          model: 'CouseStatus',
          key: 'id',
        },
      },
      url: DataTypes.STRING,
      roadmap: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Roadmap',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Course',
      tableName: 'courses',
    }
  );
  return Course;
};
