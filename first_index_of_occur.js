/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n = needle.length;
    let cur_counter = 0;

    for (let i = 0; i < haystack.length; i++) {
        cur_counter = 0;

        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] === needle[j]) {
                cur_counter++;

                if (cur_counter === n) {
                    return i;
                }
            }
        }
    }

    return -1;
};