/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const res = [];

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;

    if (s.length < totalLen) return res;

    const need = new Map();

    for (const word of words) {
        need.set(word, (need.get(word) || 0) + 1);
    }

    for (let offset = 0; offset < wordLen; offset++) {
        let left = offset;
        let count = 0;
        let seen = new Map();

        for (let right = offset; right + wordLen <= s.length; right += wordLen) {
            const word = s.slice(right, right + wordLen);

            if (need.has(word)) {
                seen.set(word, (seen.get(word) || 0) + 1);
                count++;

                while (seen.get(word) > need.get(word)) {
                    const leftWord = s.slice(left, left + wordLen);
                    seen.set(leftWord, seen.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }

                if (count === wordCount) {
                    res.push(left);

                    const leftWord = s.slice(left, left + wordLen);
                    seen.set(leftWord, seen.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }
            } else {
                seen.clear();
                count = 0;
                left = right + wordLen;
            }
        }
    }

    return res;
};