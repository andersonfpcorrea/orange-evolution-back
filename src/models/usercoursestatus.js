'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserCourseStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserCourseStatus.init(
    {
      idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      idCourse: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'Course',
          key: 'id',
        },
      },
      idStatus: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'CouseStatus',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'UserCourseStatus',
    }
  );
  return UserCourseStatus;
};
