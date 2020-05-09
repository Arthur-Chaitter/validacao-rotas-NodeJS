const { Router } = require('express');

const AdminController = require('../controllers/AdminController');
const adminAlth = require('../middlewares/adminAlth');

const AdminRoutes = new Router();

AdminRoutes.use(adminAlth);
AdminRoutes.get('/admin', AdminController.index);

module.exports = AdminRoutes;