require('../src/db/mongoose');
const Task = require('../src/models/task');

// 5ede79f8300e0f993b7bb1d2

// Task.findByIdAndDelete('5ede79f8300e0f993b7bb1d2').then(
//     (task) => {
//         console.log(task);
//         return Task.countDocuments({
//             completed: false
//         });
//     }
// ).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const deleteAndCountById = async (id) => {
    const userDeleted = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
};

deleteAndCountById('5ede79f1300e0f993b7bb1d1')
    .then(count => console.log(count))
    .catch(e => console.log(e)
);