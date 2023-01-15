// Basic Callback
function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function calc(firstNumber, secondNumber, callback) {
    return callback(firstNumber, secondNumber);
}

console.log(calc(2, 2, sum));

// SetTimeout
setTimeout(function () {
    console.log("Hello JavaScript");
}, 2000);

function greeting(name) {
    console.log(`Hello ${name}`);
}

setTimeout(greeting, 2000, "Alexis");
