// render home page
const homeView = (req, res) => {

    // Check if user is logged in
    if (req.user) {
        // User is logged in, pass user data to the template
        res.render('home', { user: req.user });
    } else {
        // User is not logged in
        res.render('home', { user: null }); 
    }
}

// export middlewares
module.exports = {homeView};