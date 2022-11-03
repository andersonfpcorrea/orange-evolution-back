module.exports = (sequelize, DataTypes) => {
  const ContentAuthors = sequelize.define(
    'ContentAuthors',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      author: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      tableName: 'content_authors',
      timestamps: false,
    }
  );

  return ContentAuthors;
};
