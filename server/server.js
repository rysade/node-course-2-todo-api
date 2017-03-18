var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    "use strict";
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        "use strict";
        res.send(doc);
    }, (e) => {
        "use strict";
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    "use strict";
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.listen(3000, () => {
    "use strict";
    console.log('Started on port 3000');
});

module.exports = {app};