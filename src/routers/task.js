const express = require('express');
const router = new express.Router();
const Task = require('../models/task');

router.get('/test', (req, res) => {
    res.send('This is from my other router')
})


router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    try {
        await task.save();
        res.send(task);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdate = ['completed', 'description'];
    const isValidOperation = updates.every(update => allowedUpdate.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'});
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!task) {
            return res.status(404).send();
        }

        res.send(task);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.code(404).send('Error retrieving task');
        }
        res.send(task);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/tasks/:id', async(req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send(error);
        }
        res.send(task);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
