const removeFromArray = function(array, ...args) {
    function excludeItems() {
        for (const item of array) {
            if (item !== args) {
                return false;
            }
            else {
                return true;
            }
        }
    }

    return array.filter(excludeItems);
};

// Do not edit below this line
module.exports = removeFromArray;
