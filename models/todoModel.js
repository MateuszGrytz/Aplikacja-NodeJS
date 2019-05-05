var mongoose = require('mongoose');

var Szablon = mongoose.Schema;

var Szablon_Todo = new Szablon(
{
    login: String,
    todo: String,
    czy_wykonane: Boolean,
    czy_zalacznik: Boolean
});

var Todosy = mongoose.model('Todosy',Szablon_Todo);

module.exports = Todosy;