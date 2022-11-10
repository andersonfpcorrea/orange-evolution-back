const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');

exports.getOne = async (id) =>
  sequelize.query(
    `SELECT ucs.idUser, JSON_ARRAYAGG(c.nameCourse) AS courses, JSON_ARRAYAGG(rm.title) AS roadmaps, JSON_ARRAYAGG(cs.status) AS status, JSON_ARRAYAGG(ucs.favoriteCourse) AS favorites
    FROM users_courses_status ucs
    INNER JOIN courses c
    JOIN courses_status cs
    INNER JOIN roadmaps rm
    WHERE ucs.idCourse = c.id AND ucs.idStatus = cs.id AND ucs.idUser = ? AND rm.id = c.roadmap
    GROUP BY ucs.idUser;`,
    {
      replacements: [id],
      type: QueryTypes.SELECT,
    }
  );

exports.getAll = async () =>
  sequelize.query(
    `SELECT ucs.idUser, JSON_ARRAYAGG(c.nameCourse) AS courses, JSON_ARRAYAGG(rm.title) AS roadmaps, JSON_ARRAYAGG(cs.status) AS status, JSON_ARRAYAGG(ucs.favoriteCourse) AS favorites
    FROM users_courses_status ucs
    INNER JOIN courses c
    JOIN courses_status cs
    INNER JOIN roadmaps rm
    WHERE ucs.idCourse = c.id AND ucs.idStatus = cs.id AND rm.id = c.roadmap
    GROUP BY ucs.idUser;`,
    { type: QueryTypes.SELECT }
  );
