const palindromes = function (string) {
    //make string lowercase, remove spaces, remove punctuation
    let cleanString = string.replaceAll("\\s", "").toLowerCase().replaceAll(/[^a-z]/g, "");
    //check if newstring equals a reversed newstring
    let arrayString = cleanString.split("");
    let reverseArrayString = arrayString.reverse();
    let reverseString = reverseArrayString.join("").toString();
    return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
