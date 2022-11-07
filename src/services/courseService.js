const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');

exports.findAll = async () =>
  sequelize.query(
    `SELECT c.id, c.nameCourse AS course, ct.title AS type, ca.author AS author, ca.image, c.length, c.url, r.title AS roadmap
    FROM courses c
    INNER JOIN course_types ct
    INNER JOIN content_authors ca
    INNER JOIN  roadmaps r
    WHERE c.type = ct.id AND c.author = ca.id AND c.roadmap = r.id
    ORDER BY c.id;`,
    { type: QueryTypes.SELECT }
  );

exports.findById = async (id) =>
  sequelize.query(
    `SELECT c.id, c.nameCourse AS course, ct.title AS type, ca.author AS author, ca.image, c.length, c.url, r.title AS roadmap
        FROM courses c
        INNER JOIN course_types ct
        INNER JOIN content_authors ca
        INNER JOIN  roadmaps r
        WHERE c.type = ct.id AND c.author = ca.id AND c.roadmap = r.id AND c.id = ?;`,
    { replacements: [id], type: QueryTypes.SELECT }
  );
