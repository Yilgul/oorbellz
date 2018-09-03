
var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var q = keystone.list('Product').model.findById(req.query.product_id);	
		q.exec(function(err, result) {
			var product = result;
			req.session.cart.push(result);
			res.send('success');
		});
};