const app = require('express');
const router = app.Router();

// Import the controller
const apiController = require('../controllers/apiController');

// Get all users
router.get('/api/users', apiController.apiUsers);

module.exports = router;