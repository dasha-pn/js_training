/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let total = 0;

    for (let i = 0; i < height.length; i++) {
        let maxLeft = 0;
        let maxRight = 0;

        for (let l = 0; l <= i; l++) {
            maxLeft = Math.max(maxLeft, height[l]);
        }

        for (let r = i; r < height.length; r++) {
            maxRight = Math.max(maxRight, height[r]);
        }

        total += Math.min(maxLeft, maxRight) - height[i];
    }
    return total;
};