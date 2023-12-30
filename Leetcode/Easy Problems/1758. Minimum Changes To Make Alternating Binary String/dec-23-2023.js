/**
  December 23, 2023
  - Runtime Achieved: 53 ms 
  - Memory Achieved: 42.8 MB
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let len = s.length;
    let n = 0;
    for(let i = 0; i < len; i++) {
        if(i % 2) {
            if(s[i] === '1')
                n++;
        } 
        else {
            if(s[i] === '0')
                n++;
        }
    }
    return Math.min(len - n, n);
};
