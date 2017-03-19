/**
 * Created by rysade on 3/18/17.
 */
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     "use strict";
//     console.log(result);
// });

// Todo.findOneAndRemove() //returns doc
// Todo.findByIdAndRemove() //returns doc

// Todo.findOneAndRemove({_id: '58cec43e19b902fe0742cf4d'}).then((todo) => {
//     "use strict";
//
// });

// Todo.findByIdAndRemove('58cec43e19b902fe0742cf4d').then((todo) => {
//     "use strict";
//     console.log(todo);
// });