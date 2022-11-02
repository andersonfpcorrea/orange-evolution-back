'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'course_types',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      author: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'content_authors',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      length: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        references: {
          model: 'courses_status',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      roadmap: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'roadmaps',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('courses');
  },
};
