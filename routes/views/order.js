var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	locals = res.locals;
	
	locals.section = 'order';
	
	view.on('init', function(next) {
        //console.log(" !!!! "+ req.params.order);
        var q = keystone.list('Order').model.findById(req.params.order);
        console.log("q = " + q )  
		
		q.exec(function(err, result) {
            locals.product = result;
            //console.log(" !!!! "+locals.product);
			next(err);
		});
		
	});
	
    view.render('order');
}; 
