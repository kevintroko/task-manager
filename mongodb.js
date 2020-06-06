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

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5ecbff6337ce204979622299")
    // }, {
    //     $inc: {
    //         age: -14,
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });
});
