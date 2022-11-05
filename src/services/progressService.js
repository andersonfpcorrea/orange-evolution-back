const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');

exports.getOne = async (id) =>
  sequelize.query(
    `SELECT ucs.idUser, JSON_ARRAYAGG(c.nameCourse) AS courses, JSON_ARRAYAGG(cs.status) AS status, JSON_ARRAYAGG(ucs.favoriteCourse) AS favorites
    FROM orangedb_dev.users_courses_status ucs
    INNER JOIN orangedb_dev.courses c
    JOIN orangedb_dev.courses_status cs
    WHERE ucs.idCourse = c.id AND ucs.idStatus = cs.id AND ucs.idUser = ?
    GROUP BY ucs.idUser;`,
    {
      replacements: [id],
      type: QueryTypes.SELECT,
    }
  );

exports.getAll = async () =>
  sequelize.query(
    `SELECT ucs.idUser, JSON_ARRAYAGG(c.nameCourse) AS courses, JSON_ARRAYAGG(cs.status) AS status, JSON_ARRAYAGG(ucs.favoriteCourse) AS favorites
    FROM orangedb_dev.users_courses_status ucs
    INNER JOIN orangedb_dev.courses c
    JOIN orangedb_dev.courses_status cs
    WHERE ucs.idCourse = c.id AND ucs.idStatus = cs.id
    GROUP BY ucs.idUser;`,
    { type: QueryTypes.SELECT }
  );
