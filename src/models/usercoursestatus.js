module.exports = (sequelize, DataTypes) => {
  const UsersCourseStatus = sequelize.define("UsersCourseStatus", {
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    idCourse: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'Course',
        key: 'id',
      },
    },
    idStatus: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'CourseStatus',
        key: 'id',
      },
    },
  }, { 
    tableName: 'users_courses_status',
    timestamps: false 
  });

  UsersCourseStatus.associate = (models) => {
    models.Users.belongsToMany(models.Courses,
      {
        as: 'courses',
        foreignKey: 'id_user',
        through: UsersCourseStatus,
        otherKey: 'id_course',
        otherKey: 'id_status',
      });

    models.CourseStatus.belongsToMany(models.Courses,
      {
        as: 'courses',
        foreignKey: 'id_status',
        through: UsersCourseStatus,
        otherKey: 'id_course',
        otherKey: 'id_user'
      });

    models.Courses.belongsToMany(models.Users,
      {
        as: 'users',
        foreignKey: 'id_courses',
        through: UsersCourseStatus,
        otherKey: 'id_status',
        otherKey: 'id_user'
      })
  }

  return UsersCourseStatus;
};