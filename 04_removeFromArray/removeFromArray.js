const removeFromArray = function(array, ...args) {
    let updatedArray = [];
    // forEach executes a function once for each array element
    array.forEach((item) => {
        // If args does not equal the array element then add that array element to updatedArray
        if (!args.includes(item)) {
            updatedArray.push(item);
        }
    });
    return updatedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
