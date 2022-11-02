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
        references: {
          model: 'CourseType',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      author: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ContentAuthor',
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
          model: 'CouseStatus',
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
        references: {
          model: 'Roadmap',
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
