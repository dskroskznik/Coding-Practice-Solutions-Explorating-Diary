/**
  December 26, 2023
  - Runtime Achieved: 72 ms
  - Memory Achieved: 46.6 MB
/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    const modulo = 10**9+7;
    let matrix = Array.from({length:n+1}, () => Array(target+1).fill(-1));
    const search = (n, target) => {
        let solves = 0;
        if(n===0 && target === 0) return 1;
        if(n===0 || target <= 0) return 0;
        if(matrix[n][target] !== -1) {
            return matrix[n][target];
        }
        for(let index = 1;index<=k;index++) {
            solves += search(n-1, target - index);
        }
        return matrix[n][target] = solves % modulo;
    }
    return search(n, target, matrix, modulo)
};
