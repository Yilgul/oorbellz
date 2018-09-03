var keystone = require('keystone');
var Product = keystone.list('Product');
exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'products';
	locals.title = 'products';
	
    view.query('products', Product.model.find());
    
     view.on('init', function(next) {
	Product.paginate({
		page: req.query.page || 1,
		perPage: 10,
		maxPages: 100
	}).exec(function(err, res) {
		locals.products = res;
		//console.log(JSON.stringify(res));
		next(err);
	});
	}); 
    // Render the view
    
    
	view.render('products');
	
};