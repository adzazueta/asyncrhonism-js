// Basic Promise
const promise = new Promise(function (resolve, reject) {
    resolve("Hey! it's all good");
});

// Promise
const cows = 15;
const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`We've ${cows} cows on the farm`);
    } else {
        reject("Not enough cows");
    }
});

countCows
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finally");
    });
