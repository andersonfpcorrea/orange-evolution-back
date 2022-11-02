'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CouseStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CouseStatus.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'CouseStatus',
      tableName: 'courses_statuses',
    }
  );
  return CouseStatus;
};
