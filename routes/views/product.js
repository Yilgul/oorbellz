var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	locals = res.locals;
	
	locals.section = 'product';
	
	view.on('init', function(next) {
        //console.log(" !!!! "+ req.params.product);
		var q = keystone.list('Product').model.findById(req.params.product);
		
		q.exec(function(err, result) {
            locals.product = result;
            //console.log(" !!!! "+locals.product);
			next(err);
		});
		
	});
	
    view.render('product');
}; 

