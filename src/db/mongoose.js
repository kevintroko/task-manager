const mongoose = require('mongoose');
const validator = require('validator');

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api';

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// });

// const task = new Task({
//     description: 'Learn Mocha',
//     completed: 'fell'
// });

// task.save().then(
//     () => {
//         console.log(task);
//     }
// ).catch((error) => {
//     console.log('Error! ', error);
// });


const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number');
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }
});

const me = new User({
    name: 'Teddy',
    email: 'teddy@bear.com'
});

me.save().then(
    () => {
        console.log(me);
    }
).catch((error) => {
    console.log('Error! ', error);
});
