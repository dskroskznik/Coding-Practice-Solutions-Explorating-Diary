/*
  December 20, 2023
  - Runtime Achieved: 139 ms
  - Memory Achieved: 61.9 MB
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let i;
    let maxLen = 0;
    var sorted = points.sort((x,y) => x[0] - y[0]);
    for(i=1;i<sorted.length;i++) {
        if(sorted.length < 2) return 1;
        let difference = sorted[i][0] - sorted[i-1][0];
        maxLen = Math.max(maxLen, difference);
    }
    return maxLen;
};
