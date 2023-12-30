/**
  December 22, 2023
  - Runtime Achieved: 49 ms
  - Memory Achieved: 41.9 MB
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let len = s.length;
    let maxScore, score, right = 0;
    score = s[0] === '0' ? 1 : 0;
    maxScore = score;
    for (let left = 1; left < len - 1; left++) {
        if (s[left] === '0') {
            score += 1;
        } else {
            score -= 1;
            right += 1;
        }
        maxScore = Math.max(score, maxScore);
    }
    right += s[len - 1] === '1' ? 1 : 0;
    maxScore = maxScore + right;
    return maxScore;
};
