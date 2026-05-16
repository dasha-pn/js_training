/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let sortedArr = nums
        .filter(num => num > 0)
        .toSorted((a, b) => a - b);

    let expected = 1;

    for (let num of sortedArr) {
        if (num === expected) {
            expected++;
        }
    }

    return expected;
};