/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];

    function backtracking(start, path, sum) {
        if (sum === target) {
            result.push([...path]);
            return;
        }

        if (sum > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);

            backtracking(i, path, sum + candidates[i]);

            path.pop();
        }
    }
    backtracking(0, [], 0);
    return result;
};