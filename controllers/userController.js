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
                    console.log("Error authenticating user: ", error);
                    res.send(error);
                } else {
                    console.log("Successfully authenticated");
                    
                    // Redirect to the home page
                    res.redirect("/");
                };
            });
        } else {
            console.log("Error authenticating user: ", options.message);
            // Set the message to be passed to the template
            res.render("login", { message: options.message });
        };
  })(req, res)
};

// logout user
const logout = (req, res, next) => {
    req.logout((err) => {
    if (err) {
        return next(err);
    }
        res.redirect("/");
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