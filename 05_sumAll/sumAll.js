const sumAll = function(start, end) {
    let sum = 0;
    if (typeof(start) != typeof(end)) {
        return "ERROR";
    }
    else if (start > end) {
        for (i = start; i >= end; i--) {
            sum += i;
        }
        return sum;
    }
    else if (start > 0 && start < end) {
        for (i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
