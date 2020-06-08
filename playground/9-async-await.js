
const add = (a, b) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                if (a < 0 || b < 0) {
                    return reject('Numbers must be positive');
                }
                resolve(a + b);
            }, 1000);
        }
    );
};

// const doWork = async () => {
//     const sum = await add(1, 99);
//     return sum;
// };

const doWork = async () => {
    const sum = await add(1, 99);
    const sum2 = await add(sum, 50);
    const sum3 = await add(sum2, -3);
    return sum3;
};

doWork().then(
    (result) => {
        console.log('String result', result)
    }).catch((e) => {
        console.log('error', e);
    }
);