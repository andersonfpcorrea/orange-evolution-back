const router = require('express').Router();
const { userController } = require('../controllers');

router.get('/:id', userController.getUser);

router.route('/').get(userController.getUsers).put(userController.update);

module.exports = router;
