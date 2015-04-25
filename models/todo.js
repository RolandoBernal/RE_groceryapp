var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
    item: {type: String, required: true, default: ''},
    quantity: {type: Number, required: true, default: 1 },
    price: {type: Number, required: true, default: 1 },
    found: {type: Boolean, required: true, default: false },
    user: {type: String, required: true}
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;



// Original code from To-Do List

// var mongoose = require('mongoose');

// var todoSchema = mongoose.Schema({
//     due_date: {type: Date, required: true, default: Date.now },
//     description: {type: String, required: true, default: ''},
//     title: {type: String, required: true, default: ''},
//     priority: {type: Number, required: true, default: 1 },
//     complete: {type: Boolean, required: true, default: false },
//     user: {type: String, required: true}
// });

// var Todo = mongoose.model('Todo', todoSchema);

// module.exports = Todo;

