const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');

/**
 * @param {string} q
 */
exports.findAll = async (q) => {
  const query = q ? `%${q}%` : '%';
  const courses = await sequelize.query(
    `SELECT c.id, c.nameCourse AS course, ct.title AS type, ca.author AS author, ca.image AS authorImage, c.length, c.url, r.title AS roadmap
    FROM courses c
    INNER JOIN course_types ct
    INNER JOIN content_authors ca
    INNER JOIN  roadmaps r
    WHERE c.nameCourse LIKE ? AND c.type = ct.id AND c.author = ca.id AND c.roadmap = r.id
    ORDER BY c.id;`,
    {
      replacements: [query],
      type: QueryTypes.SELECT,
    }
  );
  const quantity = courses.length;
  return { quantity, courses };
};

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

exports.findByRoadmap = async (r) => {
  const query = r ? `%${r}%` : '%';
  const courses = await sequelize.query(
    `SELECT c.id, c.nameCourse AS course, ct.title AS type, ca.author AS author, ca.image AS authorImage, c.length, c.url, r.title AS roadmap
    FROM courses c
    INNER JOIN course_types ct
    INNER JOIN content_authors ca
    INNER JOIN  roadmaps r
    WHERE r.title LIKE ? AND c.type = ct.id AND c.author = ca.id AND c.roadmap = r.id
    ORDER BY c.id;`,
    {
      replacements: [query],
      type: QueryTypes.SELECT,
    }
  );
  const quantity = courses.length;
  return { quantity, courses };
};

exports.findByRoadmapAndType = async (roadmap, type) => {
  const r = `%${roadmap}%`;
  const t = `${type}`;
  const courses = await sequelize.query(
    `SELECT c.id, c.nameCourse AS course, ct.title AS type, ca.author AS author, ca.image AS authorImage, c.length, c.url, r.title AS roadmap
    FROM courses c
    INNER JOIN course_types ct
    INNER JOIN content_authors ca
    INNER JOIN  roadmaps r
    WHERE r.title LIKE ? AND c.type = ct.id AND c.author = ca.id AND c.roadmap = r.id AND ct.title LIKE ?
    ORDER BY c.id;`,
    {
      replacements: [r, t],
      type: QueryTypes.SELECT,
    }
  );
  const quantity = courses.length;
  return { quantity, courses };
};
