const fibonacci = function (member) {
    member = typeof member == "number" ? member : parseInt(member);
    if (member > 0) {
        let result = [];
        for (i = 1; i <= member; i++) {
            if (i == 1 || i == 2) {
                result.push(1);
            } else {
                result.push(result[i - 3] + result[i - 2]);
            }
        }
        return result[member - 1];
    }
    return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
