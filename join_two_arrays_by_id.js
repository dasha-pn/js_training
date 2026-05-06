/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let resultArr = [...arr1];

    for (let i = 0; i < arr2.length; i++) {
        let found = false;

        for (let j = 0; j < resultArr.length; j++) {
            if (resultArr[j].id === arr2[i].id) {
                resultArr[j] = { ...resultArr[j], ...arr2[i] };
                found = true;
                break;
            }
        }

        if (!found) {
            resultArr.push(arr2[i]);
        }
    }

    return resultArr.sort((a, b) => a.id - b.id);
};