/**
 * Created by rysade on 3/14/17.
 */
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    "use strict";
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('58cb251419b902fe07411784')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('58c884c8320f6e1c6ff202d3')
    }, {
        $set: {
            name: 'rysade'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    });



    // db.close();
});