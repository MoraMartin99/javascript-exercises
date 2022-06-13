const sumAll = function (num1, num2) {
    let argsAreInt = Number.isInteger(num1) && Number.isInteger(num2);
    if (argsAreInt) {
        if (num1 < 0 || num2 < 0) {
            return "ERROR";
        }
    } else {
        return "ERROR";
    }
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    let result = 0;

    for (min; min <= max; min++) {
        result += min;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
