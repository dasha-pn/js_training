/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a-b);

    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const curSum = nums[i] + nums[left] + nums[right];

            if (Math.abs(curSum - target) < Math.abs(closestSum - target)) {
                closestSum = curSum;
            }

            if (curSum < target) {
                left++;
            } else if (curSum > target) {
                right--;
            } else {
                return curSum
            }
        }
    }
    return closestSum;
};