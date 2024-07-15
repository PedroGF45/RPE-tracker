const app = require('express');
const router = app.Router();

// Import the controller
const apiController = require('../controllers/apiController');

// Get all users
router.get('/api/getUsers', apiController.getUsers);

// Get all teams
router.get('/api/getTeams', apiController.getTeams);

// Create a team
router.post('/api/team', apiController.apiTeam);

// Create a training
router.post('/api/training', apiController.apiTraining);

// Create a RPE
router.post('/api/rpe', apiController.apiRPE);

module.exports = router;