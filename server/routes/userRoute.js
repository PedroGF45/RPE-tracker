// Initiate express router
const app = require('express');
const router = app.Router();

const userController = require('../controllers/userController');

// login page route
router.get('/login', userController.loginView);

// login user route
router.post('/login', userController.loginUser);

// logout route
router.post('/logout', userController.logout);

// register page route
router.get('/register', userController.registerView);

// register user route
router.post('/register', userController.registerUser);

module.exports = router;