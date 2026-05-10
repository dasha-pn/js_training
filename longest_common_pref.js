/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longest_pref = "";
    let num_words = strs.length

    for (let i = 0; i < strs[0].length; i++) {
        let temp_pref = strs[0][i];
        let counter = 1;
        for (let j = 0; j < strs.length - 1; j++) {
            if (strs[j+1][i] === temp_pref) {
                counter++;
            }
        }
        if (counter === num_words) {
            longest_pref += temp_pref;
        } else {
            break;
        }
    }
    return longest_pref;
};