const removeFromArray = function(array, argument) {
    let finalOutput = [];
    for (const userOutput of array) {   //run through array
        if (userOutput != argument) {   //if the argument does not match
            finalOutput.push(userOutput);  //return to add to array
        }
    }
    return finalOutput;
};

// Do not edit below this line
module.exports = removeFromArray;
