const { Router } = require('express');

const userRoutes = new Router();

const UserController = require('../controllers/UserController');
const UserValidation = require('../validations/UserValidation');

const userAlth = require('../middlewares/userAlth');

userRoutes.get('/user', UserValidation.index , userAlth , UserController.index);

module.exports = userRoutes;