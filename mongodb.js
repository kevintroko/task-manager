// CRUD create read update delete

const chalk = require('chalk');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.log(chalk.red('Unable to connect to database'));
        return;
    } 

    const db = client.db(databaseName);
    db.collection('users').insertOne({
        name: 'Kevin',
        age: 24
    });
});
