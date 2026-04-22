/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (s.length === 1 || numRows === 1) return s;

    let resString = "";
    const cycleLen = 2 * numRows - 2

    for (let row = 0; row < numRows; row++) {
        for (let i = row; i < s.length; i += cycleLen) {
            resString += s[i];

            let diag = i + cycleLen - 2 * row;
            if (row !== 0 && row !== numRows - 1 && diag < s.length) {
                resString += s[diag];
            }
        }
    }

    return resString;
};