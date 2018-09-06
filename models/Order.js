var keystone = require('keystone');
var Types = keystone.Field.Types;

var Order = new keystone.List('Order', {

});

Order.add({
	ID: { type: Types.Text, ref: 'User', index: true, noedit:true },
	klant: { type: Types.Text, ref: 'User', index: true, noedit:true},
	producten: { type: Types.Text, ref: 'Product', many: true, index: true, noedit:true},
	verstuurd: { type: Types.Boolean, ref: 'Ontvangen', index: true},
	betaald: { type: Types.Boolean, ref: 'Betaald', index: true, noedit:true},
	bedrag: { type: Types.Money, format: '€0.00,00' },
	betaalDatum: { type: Types.Date, ref: 'BetaaldDatum', index: true, noedit:true}, 
});

Order.defaultSort = '-createdAt';
Order.defaultColumns = 'klant, producten, bedrag, betaald';
Order.register();