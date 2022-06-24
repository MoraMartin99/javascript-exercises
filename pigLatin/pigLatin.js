function pigLatin(string) {
    let arrRegEx = /[a-z]+/gi;
    let arr = string.match(arrRegEx);
    return arr.reduce((total, current, index) => {
        let startVowel = /^[aeiou]/gi.test(current);
        let startConsonant = /^[^aeiou\d\W]/gi.test(current);
        if (startVowel) {
            total.push(current.concat("ay"));
        }
        if (startConsonant) {
            let startSpecialCase = /(^[^aeiou\d\W]+qu|^qu)([a-z]*)/gi.test(
                current
            );
            if (startSpecialCase) {
                total.push(
                    current.replace(
                        /(^[^aeiou\d\W]+qu|^qu)([a-z]*)/gi,
                        "$2$1ay"
                    )
                );
            } else {
                total.push(
                    current.replace(/(^[^aeiou\d\W]+)([a-z]*)/gi, "$2$1ay")
                );
            }
        }

        if (index == arr.length - 1) {
            return total.join(" ");
        } else {
            return total;
        }
    }, []);
}

// Do not edit below this line
module.exports = pigLatin;
