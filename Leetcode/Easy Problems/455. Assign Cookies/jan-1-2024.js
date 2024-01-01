/**
  January 1, 2024
  - Runtime Achieved: 167 ms   
  - Memory Achieved: 44.3 MB
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a,b) => (a - b)); 
    s = s.sort((a,b) => (a - b));
    let gsize = g.length;
    let ssize = s.length;
    let i = 0, j = 0; count = 0;
    if(gsize=== 0 || ssize===0) return 0;
    while(i < gsize && j < ssize) {
        if(s[j]>=g[i]) {
            count++;
            i++;
        }
        j++;
    }
    return count;
};
