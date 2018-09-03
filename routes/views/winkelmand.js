var keystone = require('keystone');
var Order = keystone.list('Order');
exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	if(req.user == undefined){
		view.render("errors/404");
		return;
	}
	console.log("loggedin user ="+req.user.email + " " + req.user.name.first);

	var locals = res.locals;

	// Set locals
	locals.section = 'winkelmand';
	locals.title = 'Winkelmand';

	view.query('orders', keystone.list('Order').model.find().where('ID', req.user.id));
	
/* 	view.on('init', function(next) {
	Order.paginate({
		page: req.query.page || 1,
		perPage: 2,
		maxPages: 10
	})
	.where('klant', req.user.id)
	.sort('-publishedDate')
	.exec(function(err, res) {
		locals.Orders = res;
		console.log(locals.Orders); 
		next(err);
	});
	}); */
	// Render the view
	view.render('winkelmand');
	
};