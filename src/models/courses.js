module.exports = (sequelize, DataTypes) => {
  const Courses = sequelize.define(
    'Courses',
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nameCourse: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name_course',
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'CourseTypes',
          key: 'id',
        },
      },
      author: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ContentAuthors',
          key: 'id',
        },
      },
      length: {
        type: DataTypes.DATE, // Permite "null" porque alguns cursos são livros
      },
      status: {
        type: DataTypes.INTEGER,
        references: {
          model: 'CourseStatus',
          key: 'id',
        },
      },
      url: DataTypes.STRING,
      roadmap: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Roadmaps',
          key: 'id',
        },
      },
    },
    {
      tableName: 'courses',
      timestamps: true,
      underscored: true,
    }
  );

  Courses.associate = function (models) {
    Courses.belongsTo(models.ContentAuthors, {
      foreignKey: 'author',
      as: 'authors',
    });
  };

  Courses.associate = function (models) {
    Courses.belongsTo(models.CourseTypes, {
      foreignKey: 'type',
      as: 'types',
    });
  };

  Courses.associate = function (models) {
    Courses.belongsTo(models.Roadmaps, {
      foreignKey: 'roadmap',
      as: 'roadmaps',
    });
  };

  return Courses;
};
