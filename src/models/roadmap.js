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
      image: DataTypes.STRING,
    },
    {
      tableName: 'roadmaps',
      timestamps: true,
    }
  );

  Roadmaps.associate = (models) => {
    Roadmaps.hasMany(models.Courses, {
      foreignKey: 'roadmap',
      as: 'courses',
    });
  };

  return Roadmaps;
};
