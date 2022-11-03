module.exports = (sequelize, DataTypes) => {
  const CourseStatus = sequelize.define(
    'CourseStatus',
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
      tableName: 'courses_status',
      timestamps: false,
    }
  );

  return CourseStatus;
};
