var Todosy = require('../models/todoModel');

module.exports = function(app)
{
    app.get('/api/setupTodosy',function(req,res)
    {
        //inicjalizacja bazy danych
        var startowe_Todo = 
        [
            {
                login: 'Mati',
                todo: 'zagraj Wieska',
                czy_wykonane: false,
                czy_zalacznik: false
            },
            {
                login: 'Marcin',
                todo: 'prowadz Inklizito',
                czy_wykonane: false,
                czy_zalacznik: false
            },
            {
                login: 'Tata',
                todo: 'przejdz gothica',
                czy_wykonane: false,
                czy_zalacznik: false
            }
        ];
        Todosy.create(startowe_Todo,function(err,results)
        {
            res.send(results);
        });
    });
}