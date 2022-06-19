const palindromes = function (word) {
    let regex = /[\w]/gi;
    let arr = word.match(regex);
    return arr.join("").toLowerCase() === arr.reverse().join("").toLowerCase()
        ? true
        : false;
};

// Do not edit below this line
module.exports = palindromes;
