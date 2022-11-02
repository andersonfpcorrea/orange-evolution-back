'use strict';
const {
  Model
} = require('sequelize');
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
  UserCourseStatus.init({
    idUser: DataTypes.INTEGER,
    idCourse: DataTypes.INTEGER,
    idStatus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserCourseStatus',
  });
  return UserCourseStatus;
};