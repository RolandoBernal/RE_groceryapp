var mongoose = require('mongoose');

var grocerySchema = mongoose.Schema({
    item: {type: String, required: true, default: ''},
    quantity: {type: Number, required: true, default: 1 },
    price: {type: Number, required: true, default: 1 },
    cost: {type: Number, required: false},
    found: {type: Boolean, required: true, default: false },
    user: {type: String, required: true}
});

var Grocery = mongoose.model('Grocery', grocerySchema);

module.exports = Grocery;


