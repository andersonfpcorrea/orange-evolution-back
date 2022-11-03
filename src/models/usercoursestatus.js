module.exports = (sequelize, DataTypes) => {
  const UsersCourseStatus = sequelize.define(
    'UsersCourseStatus',
    {
      favoriteCourse: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: 'users_courses_status',
      timestamps: false,
    }
  );

  UsersCourseStatus.associate = (models) => {
    models.Users.belongsToMany(models.Courses, {
      as: 'courses',
      foreignKey: 'idUser',
      through: UsersCourseStatus,
      otherKey: 'idCourse',
      otherKey: 'idStatus',
    });

    models.CourseStatus.belongsToMany(models.Courses, {
      as: 'courses',
      foreignKey: 'idStatus',
      through: UsersCourseStatus,
      otherKey: 'idCourse',
      otherKey: 'idUser',
    });

    models.Courses.belongsToMany(models.Users, {
      as: 'users',
      foreignKey: 'idCourses',
      through: UsersCourseStatus,
      otherKey: 'idCtatus',
      otherKey: 'idUser',
    });
  };

  return UsersCourseStatus;
};
