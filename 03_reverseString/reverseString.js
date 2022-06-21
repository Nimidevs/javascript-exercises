const reverseString = function(string) {
    let myArray = string.split("");
    let reverseArray = myArray.reverse()
    let joinArray = reverseArray.join("")
    return joinArray;
};
 reverseString("Hello")
// Do not edit below this line
module.exports = reverseString;
