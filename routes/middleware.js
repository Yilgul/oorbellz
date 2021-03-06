/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require('lodash');


/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
exports.initLocals = function (req, res, next) {
	
	res.locals.navLinks = [
		//{ label: 'Home', key: 'home', href: '/' },
		/* { label: 'Blog', key: 'blog', href: '/blog' }, */
		/* { label: 'Contact', key: 'contact', href: '/contact' }, */
		/* {label: 'Winkelwagen', key: 'order', href: '/mycart' },	 */
		{ label: 'Sieraden',key: 'products', href: '/products' },	

	];
/* 	if(req.user) res.locals.navLinks.push( {label: 'Winkelmand', key: 'order', href: '/mycart' }); */
	res.locals.user = req.user;
	if(req.session.cart ==undefined)req.session.cart = [];
	res.locals.sachincount = 0;
	req.session.cart.forEach( function (product)
	{
		 res.locals.sachincount += product.prijs;
		 res.locals.sachincount = Math.round(res.locals.sachincount * 100) / 100;
   	
	});
	
	cartProducten = [];
	cartProductenNaam = []
	req.session.cart.forEach(function(product){          
		cartProducten.push(product._id);           
		cartProductenNaam.push(product.naam);
	});

	
	res.locals.prod = cartProducten;
	res.locals.prod = cartProductenNaam;

	next();
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};




/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'U dient ingelogt te zijn.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
