const app = require('express');
const router = app.Router();

// Import the controller
const dashboardController = require('../controllers/dashboardController');

router.get('/dashboard', dashboardController.dashboardView);

module.exports = router;