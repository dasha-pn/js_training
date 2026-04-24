/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let reverseInt = parseInt(
        String(Math.abs(x)).split("").reverse().join("")
    );

    return reverseInt === x;
};