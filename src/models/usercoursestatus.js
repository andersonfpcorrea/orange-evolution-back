module.exports = (sequelize, DataTypes) => {
  const UsersCourseStatus = sequelize.define(
    'UsersCourseStatus',
    {
      idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      idCourse: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'id_course',
        references: {
          model: 'courses',
          key: 'id',
        },
      },
      idStatus: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'courses_status',
          key: 'id',
        },
      },
      favoriteCourse: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: 'users_courses_status',
      timestamps: true,
    }
  );

  UsersCourseStatus.associate = (models) => {
    models.Users.belongsToMany(models.Courses, {
      as: 'courses',
      through: UsersCourseStatus,
      foreignKey: 'id_user',
      otherKey: 'id_course',
    });

    models.Courses.belongsToMany(models.Users, {
      as: 'users',
      through: UsersCourseStatus,
      foreignKey: 'id_course',
      otherKey: 'id_status',
    });

    models.CourseStatus.belongsToMany(models.Courses, {
      as: 'courses',
      through: UsersCourseStatus,
      foreignKey: 'id_status',
      otherKey: 'id_course',
    });

    models.Courses.belongsToMany(models.CourseStatus, {
      as: 'course_status',
      through: UsersCourseStatus,
      foreignKey: 'id_course',
      otherKey: 'id_status',
    });

    models.CourseStatus.belongsToMany(models.Users, {
      as: 'users',
      through: UsersCourseStatus,
      foreignKey: 'id_status',
      otherKey: 'id_user',
    });

    models.Users.belongsToMany(models.CourseStatus, {
      as: 'course_status',
      through: UsersCourseStatus,
      foreignKey: 'id_user',
      otherKey: 'id_status',
    });
  };

  return UsersCourseStatus;
};
