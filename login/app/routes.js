module.exports = function(app, passport) {

	//home page with login links
	app.get('/', function(req, res) {
		res.render('index.ejs'); //load the index.ejs file
	});

	//login
	//show the login form
	app.get('/login', function(req, res) {
		//render the page and pass in any flash data if it exits
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	//process the login form
	//app.post('/login', do all our passport stuff here);

	//signup
	//show the signup form
	app.get('/signup', function(req, res) {
		//render the page and pass in any flash data if exist
		res.render('signup.ejs', { message: req.flash('signupMessage') })
	});

	//process the signup form
	//app.post('/signup', do all our passport stuff here);

	//profile section
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user ;;
		});
	});

	//logout
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');

	});

};

//route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
}














}