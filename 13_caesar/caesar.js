const caesar = function (string, offset) {
    let alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    return string.split("").reduce((total, currentLetter) => {
        let isABC = /[a-z]/i.test(currentLetter);
        if (isABC) {
            let alphabetIndex =
                alphabet.findIndex((item) => {
                    return item == currentLetter.toLowerCase();
                }) + offset;

            while (alphabetIndex > alphabet.length - 1) {
                alphabetIndex -= alphabet.length;
            }
            while (alphabetIndex < (alphabet.length - 1) * -1) {
                alphabetIndex += alphabet.length;
            }
            let changeLetter =
                currentLetter == currentLetter.toUpperCase()
                    ? alphabet.slice(alphabetIndex)[0].toUpperCase()
                    : alphabet.slice(alphabetIndex)[0];
            total = total.concat(changeLetter);
        } else {
            total = total.concat(currentLetter);
        }
        return total;
    }, "");
};

// Do not edit below this line
module.exports = caesar;
