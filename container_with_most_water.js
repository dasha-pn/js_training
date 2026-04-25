/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const area = width * currentHeight;

        maxWater = Math.max(maxWater, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};

// Ідея: беремо дві стінки зліва і справа. Площа = ширина * менша висота.
// Рухаємо той вказівник, де висота менша, бо саме вона обмежує воду.
// Складність: O(n) за часом і O(1) за пам’яттю.