const leapYears = function(year) {
    let dividedYearFour = year % 4;
    let dividedYearHundred = year % 100;
    let dividedYearFourHundred = year % 400;

    if (dividedYearFour == 0) {
        if (dividedYearHundred == 0 && dividedYearFourHundred != 0) {
            return false;
        }
        else {
            return true;
        }
    }
    else if (dividedYearFourHundred == 0) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
