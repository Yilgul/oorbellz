
var keystone = require('keystone');

var Order = keystone.list('orders');
exports = module.exports = function(req, res) {
	
 	var view = new keystone.View(req, res);
	var locals = res.locals;

	if(req.session.cart !=undefined ){
        mycart_pro_ids = [];
        req.session.cart.forEach( function (product) {
             mycart_pro_ids.push(product._id);
             
        });

        console.log("MyCartaaaa:" + mycart_pro_ids);

        name =  req.user.name.first + " " + req.user.name.last
        id = req.user._id;
        console.log(id);
        date = Date.now();
        
        var newOrder = Order.model({
                ID: req.user._id,
                klant: name, 
                producten: cartProductenNaam,
                bedrag: locals.sachincount,
                betaalDatum: date,
                betaald: true, 
                });
        updater = newOrder.getUpdateHandler(req, res, {
            errorMessage: 'There was an error creating your order:'
        });

        Order.model.findOne().populate('author').exec(function(err, post) {
            // the author is a fully populated User document
            console.log("");
          });

        console.log(locals.sachincount);
        
        updater.process(req.body, {
            flashErrors: true,
            logErrors: true,
        }, function(err) {
            if (err) {
            } else {
                req.session.cart=[];
                res.redirect('/winkelmand')
            }                 
        });                       
    }else{
        res.redirect('/');
    }
};
