const leapYears = function (year) {
    let isDivisibleBy = (dividend, divisor) => {
        return dividend % divisor == 0;
    };
    if (isDivisibleBy(year, 4)) {
        if (!isDivisibleBy(year, 100)) {
            return true;
        } else if (isDivisibleBy(year, 400)) {
            return true;
        }
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
