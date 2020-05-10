const { Router } = require('express');

const userRoutes = new Router();

const UserController = require('../controllers/UserController');
const SessionValidations = require('../validations/SessionValidations');

const userAlth = require('../middlewares/userAlth');

userRoutes.get('/user', userAlth , SessionValidations.index, UserController.index);

module.exports = userRoutes;