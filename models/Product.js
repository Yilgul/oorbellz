var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product', {
	map: {name: 'naam'},
	autokey: {path: 'slug', from: 'naam', unique: true}
});

/* , {
	map: {name: 'naam'},
	singular: 'Product', 
	plural: 'Products',
	autokey: {path: 'slug', from: 'naam', unique: true}
} */

Product.add({
	naam: { type: Types.Text, required: true,initial:true },
	prijs: { type: Types.Number, required: true,initial:true },
	dragend: {type: Types.CloudinaryImage, required: true, initial: true },
	los: {type: Types.CloudinaryImage, required: true, initial: true },
	omschrijving: { type: Types.Html, wysiwyg: true, height: 150 },
	//Categorie
});

Product.defaultSort = '-createdAt';
Product.defaultColumns = 'naam, ID, prijs, foto';
Product.register();