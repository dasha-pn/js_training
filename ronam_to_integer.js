/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbolsMap = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let twoChars = s[i] + s[i + 1];

        if (symbolsMap[twoChars]) {
            result += symbolsMap[twoChars];
            i++;
        } else {
            result += symbolsMap[s[i]];
        }
    }

    return result;
};