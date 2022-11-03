module.exports = (sequelize, DataTypes) => {
  const Roadmaps = sequelize.define(
    'Roadmaps',
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
      tableName: 'roadmaps',
      timestamps: false,
    }
  );

  return Roadmaps;
};
