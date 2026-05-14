/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let pos_indexes = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            pos_indexes.push(i);
        }
    }

    if (pos_indexes.length === 0) {
        return [-1, -1];
    }

    return [pos_indexes[0], pos_indexes[pos_indexes.length - 1]];
};