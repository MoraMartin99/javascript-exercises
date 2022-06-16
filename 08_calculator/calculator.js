const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (myArr) {
    return myArr.reduce((total, actual) => {
        return total + actual;
    }, 0);
};

const multiply = function (myArr) {
    return myArr.reduce((total, actual) => {
        total *= actual;
        return total;
    });
};

const power = function (a, b) {
    let result = 1;
    for (let i = 1; i <= b; i++) {
        result *= a;
    }
    return result;
};

const factorial = function (number) {
    let result = 1;
    for (number; number >= 1; number--) {
        result *= number;
    }
    return result;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
