const removeFromArray = function(array, ...args) {
    let finalOutput = [];
    const givenArray = array;
    let argsList = [];
    argsList.push(args);

    function excludeItems() {
        for (const item of givenArray) {
            if (item !== argsList) {
                return false;
            }
            else {
                return true;
            }
        }
    }

    const result = givenArray.filter(excludeItems);
    finalOutput.push(result);

    /* for (const userOutput of givenArray) {  
        if (userOutput !== excludeItems) {   
            finalOutput.push(userOutput);
        }
    } */

    return finalOutput;
};

// Do not edit below this line
module.exports = removeFromArray;
