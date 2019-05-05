var Todosy = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app)
{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/',function(req,res)
    {
        Todosy.find(function(err,todo)
        {
            if(err) throw err;
            //res.send(todo);
            //console.log(todo);
            res.render('index',{ludzieSerwera: todo});
        });
    });
    app.get('/api/todo/:uname',function(req,res)
    {
        Todosy.find({login: req.params.uname},function(err,todo)
        {
            if(err) throw err;
            res.send(todo);
        });
    });
    app.get('/api/todo/:id',function(req,res)
    {
        Todosy.findById({_id: req.params.id},function(err,todo)
        {
            if(err) throw err;
            res.send(todo);
        });
    });
    app.post('/api/todo',function(req,res)
    {
        if(req.body.id)
        {
            Todosy.findByIdAndUpdate(req.body.id,
                {
                    todo: req.body.todo,
                    czy_wykonane: req.body.czy_wykonane,
                    czy_zalacznik: req.body.czy_zalacznik
                },function(err,todo)
                {
                    if(err) throw err;
                    res.send('Sukces');
                });
        }
        else
        {
            var nowyTodo = Todosy(
                {
                    login: 'test',
                    todo: req.body.todo,
                    czy_wykonane: req.body.czy_wykonane,
                    czy_zalacznik: req.body.czy_zalacznik
                });
            nowyTodo.save(function(err)
            {
                if(err) throw err;
                res.send('Sukces!');
            });
        }
    });
    app.delete('/api/todo',function(req,res)
    {
        Todosy.findByIdAndRemove(req.body.id,function(err)
        {
            if(err) throw err;
            res.send('Sukces');
        });
    });
}