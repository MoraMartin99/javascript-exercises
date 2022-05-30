const removeFromArray = function (array, ...removeList) {
    let result;
    function checkValue(item) {
        return removeList.some((arrayItem) => {
            return item === arrayItem;
        });
    }
    return (result = array.reduce((total, current) => {
        if (!checkValue(current)) {
            total.push(current);
        }
        return total;
    }, []));
};

// Do not edit below this line
module.exports = removeFromArray;
