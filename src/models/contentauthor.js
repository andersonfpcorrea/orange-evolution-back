'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ContentAuthor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContentAuthor.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      author: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'ContentAuthor',
      tableName: 'content_authors',
    }
  );
  return ContentAuthor;
};
