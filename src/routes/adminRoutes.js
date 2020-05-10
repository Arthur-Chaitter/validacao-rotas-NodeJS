const { Router } = require('express');

const AdminRoutes = new Router();

const AdminController = require('../controllers/AdminController');
const AdminValidations = require('../validations/AdminValidations');
const adminAlth = require('../middlewares/adminAlth');

AdminRoutes.get('/admin', AdminValidations.index , adminAlth, AdminController.index);

module.exports = AdminRoutes;