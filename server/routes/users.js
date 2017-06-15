const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');

router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);
router.post('/signup', usersController.signUp);
router.delete('/:id', usersController.deleteUser);
router.put('/:id', usersController.updateUser);
router.post('/signin', usersController.signIn);

module.exports = router;
