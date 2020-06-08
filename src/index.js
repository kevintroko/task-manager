const express = require('express');
require('./db/mongoose'); // Ensure file run
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        res.status(500).send(error)
    }
});

app.get('/users/:id', async(req, res) => {
    const _id = req.params.id;
    console.log(_id);

    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send()
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error)
    }
});

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);
    task.save().then(() => {
        res.send(task);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;
    Task.findById(_id).then((task) => {
        if (!task) {
            return res.code(404).send(task);
        }
        res.send(task);
    }).catch((e) => {
        res.status(500).send(e);
    });
});

app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks);
    }).catch((e) => {
        res.status(500).send(e);
    });
});

app.listen(port, () => {
    console.log('Server is up on port ' , port);
});
