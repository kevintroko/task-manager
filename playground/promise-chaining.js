require('../src/db/mongoose');
const User = require('../src/models/user');

// 5ede499201be226111ea6ef6

// User.findByIdAndUpdate('5ede4dd97ce03a645e3a8cc5', { age: 1 }).then(
//     (user) => {
//         console.log(user);
//         return User.countDocuments({
//             age: 1
//         });
//     }
// ).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({age});
    return count;
};

updateAgeAndCount('5ede4dd97ce03a645e3a8cc5', 24)
    .then((count) => console.log(count))
    .catch(e => console.log(e)
);