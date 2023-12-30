/**
  December 25, 2023
  - Runtime Achieved: 54 ms
  - Memory Achieved: 42.3 MB
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let n = s.length;
    let map = new Array(n+1).fill(0);
    map[0] = 1;
    map[1] = 1;
    if(s[0]==='0'|| n==='0') return 0;
    for(let i = 2;i<=n;i++) {
        if(s.charAt(i-1)!=='0') map[i] += map[i-1]; 
        if(parseInt(s.substring(i-2,i)) >= 10 && 26 >= parseInt(s.substring(i-2,i)))
            map[i] += map[i-2];
    }
    count = map[n];
    return count;
}
