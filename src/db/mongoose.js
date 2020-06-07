const mongoose = require('mongoose');

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api';

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const task = new Task({
    description: 'Learn Mocha',
    completed: 'fell'
});

task.save().then(
    () => {
        console.log(task);
    }
).catch((error) => {
    console.log('Error! ', error);
});


// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// });

// const me = new User({
//     name: 'Kevin',
//     age: 24
// });

// me.save().then(
//     () => {
//         console.log(me);
//     }
// ).catch((error) => {
//     console.log('Error! ', error);
// });
