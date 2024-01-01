/**
  December 26, 2023
  - Runtime Achieved: 132 ms
  - Memory Achieved: 50.3 MB
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if((x!==0 && x % 10 === 0) || x < 0) { return false; }
    let palindrome = 0;
    while(x > palindrome) {
        palindrome = palindrome * 10 + x % 10; // 0 * 10 + 121 % 10 -> 1 ...cont
        x = Math.floor(x / 10); // 121 / 10 -> 12
    }
    return x === palindrome || x === Math.floor(palindrome / 10);
};
