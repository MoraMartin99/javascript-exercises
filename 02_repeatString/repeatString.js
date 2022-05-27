const repeatString = function (mystring, number) {
    let result = "";
    for (let i = 1; i <= number; i++) {
        result += mystring;
    }
    if (number < 0) {
        return "ERROR";
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
