module.exports = (sequelize, DataTypes) => {
  const CourseTypes = sequelize.define(
    'CourseTypes',
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
      tableName: 'course_types',
      timestamps: false,
    }
  );

  return CourseTypes;
};
