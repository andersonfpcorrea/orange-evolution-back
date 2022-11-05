const router = require('express').Router();
const { roadmapController } = require('../controllers');

router.route('/').get(roadmapController.getAll);

module.exports = router;
