// import User model
const User = require('../models/userModel');

// import passport
const passport = require('passport');

// import jwt
const jwt = require('jsonwebtoken');

// get secret key
const secret = process.env.SECRET;

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

                    console.log("User Logged in");

                    //console.log(user);

                    // Create a token
                    const token = jwt.sign(
                        {   userID: user._id,
                            username: user.username,
                        }, 
                        secret,
                        {expiresIn: 60 * 60}); // Expires in 1 hour

                    // Set the token in a cookie
                    res.cookie('authToken', token, {
                        httpOnly: true,
                        secure: true,
                        maxAge: 3600000 // 1 hour
                    })

                    // Set the message to be passed to the template and the session ID (token)
                    res.status(200).send({message: "User authenticated", token: token});
                };
            });
        } else {
            // Set the message to be passed to the template
            res.status(401).send({message: "Invalid username or password"});
        };
  })(req, res)
};

const isLoggedIn = (req, res) => {

    console.log("Checking if user is logged in server");

    console.log(req.isAuthenticated());

    if (req.isAuthenticated()) {

        console.log("User is logged in server");

        req.session.user = req.user; // Save user data in session

        res.status(200).send({message: "User is logged in"})
    } else {
        console.log("User is not logged in server");
        res.status(401).send({message: "User is not logged in"});
    }
}

// logout user
const logout = (req, res, next) => {
    req.logout((err) => {
    if (err) {
        return next(err);
    }
        // remove token from cookie
        res.clearCookie('authToken');

        console.log("User logged out");
        res.redirect('/');
    });
};

// register page
const registerView = (req, res) => {
    res.render('register', {message: ''});
};

// register user
const registerUser = async function (req, res) {

    const { userEmail, username, password } = req.body;

    try {
        const user = new User({ userEmail, username }); // cria um novo utilizador
        await User.register(user, password); //guarda os dados na BD. Register() vem do “plugin” de passport-local-mongoose

        console.log("User created");
        res.status(200).send({message: "User created", user: user.username});
    }   catch (err) {
        console.log(err);
        // Handle registration errors (e.g., username already exists)
        res.status(500).send(err);
  }

};

// export controller functions
module.exports = {
    loginView,
    loginUser,
    isLoggedIn,
    logout,
    registerView,
    registerUser
};