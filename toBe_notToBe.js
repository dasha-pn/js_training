/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let outVal = val

    return {
        toBe(inVal) {
            if (outVal === inVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe(inVal2) {
            if (inVal2 !== outVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */