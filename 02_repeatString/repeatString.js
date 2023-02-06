const repeatString = function(stringInput, repeatNum) {
    let stringOutput = "";
    if (repeatNum < 0) {
        return "ERROR";
    }
    for (let i = 0; i < repeatNum; i++) {
        stringOutput += stringInput;
    }
    return stringOutput;
};

// Do not edit below this line
module.exports = repeatString;
