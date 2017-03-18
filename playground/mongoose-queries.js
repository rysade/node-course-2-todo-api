/**
 * Created by rysade on 3/18/17.
 */
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58cd46dbf3040d0c2b96dd8511';
//
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     "use strict";
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     "use strict";
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     "use strict";
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var id = '58cd581819b902fe0742aadf';

User.findById(id).then((user) => {
    "use strict";
    if (!user) {
        return console.log('User not found');
    }
    console.log(user);
}).catch((e) => console.log(e));