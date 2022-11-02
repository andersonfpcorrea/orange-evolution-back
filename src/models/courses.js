module.exports = (sequelize, DataTypes) => {
  const Courses = sequelize.define("Courses", {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CourseType',
        key: 'id',
      },
    },
    author: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ContentAuthor',
        key: 'id',
      },
    },
    length: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      references: {
        model: 'CouseStatus',
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
  }, { 
    tableName: 'courses',
    timestamps: false 
  });

  Courses.associate = function (models) {
    models.Courses.belongsTo(models.ContentAuthors,
    {
      foreignKey: "author", 
      as: 'Author'
    })
  }

  Courses.associate = function (models) {
    models.Courses.belongsTo(models.CourseTypes,
    {
      foreignKey: "type", 
      as: 'CourseType'
    })
  }

  Courses.associate = function (models) {
    models.Courses.belongsTo(models.Roadmaps,
    {
      foreignKey: "roadmap", 
      as: 'Roadmap'
    })
  }

  Courses.associate = function (models) {
    models.Courses.belongsTo(models.Roadmaps,
    {
      foreignKey: "roadmap", 
      as: 'Roadmap'
    })
  }

  Courses.associate = function (models) {
    models.Courses.belongsTo(models.CourseStatus,
    {
      foreignKey: "status", 
      as: 'Status'
    })
  }

  return Courses;
};