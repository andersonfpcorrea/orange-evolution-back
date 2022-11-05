const { Courses } = require('../models');

exports.findAll = async () => Courses.findAll();

exports.findCourse = async ({ nameCourse }) => {
    const result = await Courses.findOne({
        where: { nameCourse },
    });
    return result;
};

exports.findById = async (id) => Courses.findOne({
    where: { id }
});