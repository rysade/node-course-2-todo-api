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

    db.collection('Users').deleteOne(
        {
            _id: new ObjectID('58c884dd51cd381ca2b770b0')
        }).then((result) => {
            console.log(result);
        });


    //deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteMany
    // db.collection('Users').deleteMany({_id: 'rysade'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.close();
});