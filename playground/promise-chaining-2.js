require('../src/db/mongoose');
const Task = require('../src/models/task');

// 5ede79f8300e0f993b7bb1d2

Task.findByIdAndDelete('5ede79f8300e0f993b7bb1d2').then(
    (task) => {
        console.log(task);
        return Task.countDocuments({
            completed: false
        });
    }
).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});