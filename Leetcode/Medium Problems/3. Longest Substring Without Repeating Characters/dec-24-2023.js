/*
  December 24, 2023
  - Runtime Achieved: 73 ms 
  - Memory Achieved: 48.6 MB
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let len = s.length;
    let n = 0, left = 0;
    for (let right = 0; right < len; right++) {
        let elem = s[right];
        if (map[elem] !== undefined && left <= map[elem]) {
            left = 1 + map[elem];
        } 
        else n = Math.max(n, right - left + 1);
        map[elem] = right;
    }
    return n;
};
