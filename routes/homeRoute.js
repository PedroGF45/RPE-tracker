// Initiate express router
const app = require('express');
const router = app.Router();

// get home controller
const homeController = require('../controllers/homeController');

// home route
router.get('/', homeController.homeView);

module.exports = router;