const { Router } = require('express');

const AdminRoutes = new Router();

const AdminController = require('../controllers/AdminController');
const adminAlth = require('../middlewares/adminAlth');

AdminRoutes.get('/admin', adminAlth, AdminController.index);

module.exports = AdminRoutes;