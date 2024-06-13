// import User model
const User = require('../models/userModel');

// import passport
const passport = require('passport');

// show login page
const loginView = (req, res) => {
    res.render('login', {message: ""});
};

// login user
const loginUser = (req, res) => { 

    passport.authenticate("local",
      (err, user, options) => {
        if (user) {
          // If the user exists log him in:
            req.login(user, (error)=>{
                if (error) {
                    res.status(500).send({message: "An error occurred while logging in"});
                } else {
                    // Redirect to the dashboard
                    res.status(200).send({message: "User authenticated", user: user.username});
                };
            });
        } else {
            // Set the message to be passed to the template
            res.status(401).send({message: "Invalid username or password"});
        };
  })(req, res)
};

// logout user
const logout = (req, res, next) => {
    req.logout((err) => {
    if (err) {
        return next(err);
    }
        
        res.redirect('/');
    });
};

// register page
const registerView = (req, res) => {
    res.render('register', {message: ''});
};

// register user
const registerUser = async function (req, res) {

    const { email, username, password } = req.body;

    try {
        const user = new User({ email, username }); // cria um novo utilizador
        await User.register(user, password); //guarda os dados na BD. Register() vem do “plugin” de passport-local-mongoose

        res.redirect("/login"); // redireciona para a página de login
    }   catch (err) {
        
        // Handle registration errors (e.g., username already exists)
        res.render('register', { message: err });
  }
    
};

// export controller functions
module.exports = {
    loginView,
    loginUser,
    logout,
    registerView,
    registerUser
};