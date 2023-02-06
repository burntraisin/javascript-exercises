const repeatString = function(stringInput, repeatNum) {
    let stringOutput = "";
    for (let i = 0; i < repeatNum; i++) {
        stringOutput += stringInput;
    }
    return stringOutput;
};

// Do not edit below this line
module.exports = repeatString;
