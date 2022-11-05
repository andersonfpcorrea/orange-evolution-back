const router = require('express').Router();
const { progressController } = require('../controllers');

router.route('/:id').get(progressController.getOne);
router.route('/').get(progressController.getAll);

module.exports = router;
