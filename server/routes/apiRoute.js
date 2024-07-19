const app = require('express');
const router = app.Router();

// Import the controller
const apiController = require('../controllers/apiController');

// Get all users
router.get('/api/getUsers', apiController.getUsers);

// Get all teams
router.get('/api/getTeams', apiController.getTeams);

// Get team enums
router.get('/api/getTeamEnums', apiController.getTeamEnums);

// Get all clubs
router.get('/api/getClubs', apiController.getClubs);

// Create a club
router.post('/api/club', apiController.apiClub);

// Create a team
router.post('/api/team', apiController.apiTeam);

// Create a training
router.post('/api/training', apiController.apiTraining);

// Create a RPE
router.post('/api/rpe', apiController.apiRPE);

// Get user role
router.get('/api/getUserRole', apiController.getUserRole);

// Get token
router.get('/api/getToken', apiController.getToken);

module.exports = router;