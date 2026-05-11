/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        } else {
            let top = stack.pop();

            if (top !== map[ch]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};