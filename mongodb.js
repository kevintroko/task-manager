// CRUD create read update delete

const chalk = require('chalk');

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.log(chalk.red('Unable to connect to database'));
        return;
    } 

    const db = client.db(databaseName);

    // db.collection('users').findOne({
    //     name: 'Wendy',
    //     age: 1
    // }, (error, user) => {
    //     if (error) {
    //         return console.log('Error');
    //     }

    //     console.log(user);
    // });

    // db.collection('users').find({
    //     age: 24
    // }).toArray((error, users) => {
    //     console.log(users);
    // });

    // db.collection('users').find({
    //     age: 24
    // }).count((error, count) => {
    //     console.log(count);
    // });


    db.collection('tasks').findOne({
        _id: ObjectID("5ecc06260d45ed741f24b74d")
    }, (error, task) => {
        if (error) {
            return console.log(error);
        }
        console.log(task);
    });

    db.collection('tasks').find({
        completed: false
    }).toArray(((error, tasks) => {
        if (error) {
            console.log(error);
        }

        console.log(tasks);
    }));

});
