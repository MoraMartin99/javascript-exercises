const snakeCase = function (string) {
    let regex =
        /[a-zA-Z]+(?=\.)|(?<=\.)[a-zA-Z]+|[a-z]+|[A-Z][a-z]+|[a-z]+[A-Z][a-z]+/g;
    return string
        .match(regex)
        .map((item) => {
            return item.toLowerCase();
        })
        .join("_");
};

// Do not edit below this line
module.exports = snakeCase;
