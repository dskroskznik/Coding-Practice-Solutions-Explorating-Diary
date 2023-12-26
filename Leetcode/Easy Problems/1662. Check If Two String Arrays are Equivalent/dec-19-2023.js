/*
  December 19, 2023
  - Runtime Achieved: 56 ms 
  - Memory Achieved: 41.8 MB
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let s1 = word1;
    let s2 = word2;
    let a = ""
    let b = "";
    for(let i = 0;i < s1.length;i++) 
        a+=s1[i];
    for(let i = 0;i < s2.length;i++) 
        b+=s2[i];

    return a === b;
};
