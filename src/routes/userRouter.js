const router = require('express').Router();
const { userController } = require('../controllers');

router.get('/:id', userController.getUser);

router.get('/', userController.getUsers);

module.exports = router;
