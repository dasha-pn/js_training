/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let start = 0;
    let end = 0;

    function expandFromCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        let len1 = expandFromCenter(i, i);     
        let len2 = expandFromCenter(i, i + 1); 
        let len = Math.max(len1, len2);

        if (len > end - start + 1) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
};

//version 2 - dynamic programming
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(false));

    let start = 0;
    let maxLength = 1;

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    for (let len = 2; len <= n; len++) {
        for (let left = 0; left <= n - len; left++) {
            let right = left + len - 1;

            if (s[left] === s[right]) {
                if (len === 2 || dp[left + 1][right - 1]) {
                    dp[left][right] = true;

                    if (len > maxLength) {
                        start = left;
                        maxLength = len;
                    }
                }
            }
        }
    }

    return s.substring(start, start + maxLength);
};
