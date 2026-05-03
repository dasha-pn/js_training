/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        let res = [];

        for (let item of obj) {
            if (item) {
                res.push(typeof item === "object" ? compactObject(item) : item);
            }
        }

        return res;
    } else {
        let res = {};

        for (let key in obj) {
            let val = obj[key];

            if (val) {
                res[key] = typeof val === "object" ? compactObject(val) : val;
            }
        }

        return res;
    }
};