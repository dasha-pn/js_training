/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [...nums1, ...nums2].sort((a, b) => a - b);

    let n = merged.length;
    let mid = Math.floor(n / 2);

    if (n % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};

//version 2 correctly for interview
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays1 = function(nums1, nums2) {
    // Завжди робимо binary search по меншому масиву
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays1(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;

    let left = 0;
    let right = m;

    while (left <= right) {
        let partition1 = Math.floor((left + right) / 2);
        let partition2 = Math.floor((m + n + 1) / 2) - partition1;

        let maxLeft1 = (partition1 === 0) ? -Infinity : nums1[partition1 - 1];
        let minRight1 = (partition1 === m) ? Infinity : nums1[partition1];

        let maxLeft2 = (partition2 === 0) ? -Infinity : nums2[partition2 - 1];
        let minRight2 = (partition2 === n) ? Infinity : nums2[partition2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((m + n) % 2 === 1) {
                return Math.max(maxLeft1, maxLeft2);
            }
            return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
        } 
        
        else if (maxLeft1 > minRight2) {
            right = partition1 - 1;
        } 
        
        else {
            left = partition1 + 1;
        }
    }
};