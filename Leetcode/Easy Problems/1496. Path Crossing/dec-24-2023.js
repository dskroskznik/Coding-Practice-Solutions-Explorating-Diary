/**
  December 24, 2023
  - Runtime Achieved: 50 ms
  - Memory Achieved: 42.1 MB
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let x=0, y=0;
    let visit = new Set();
    visit.add("0,0");
    for(let i of path) { 
        if(i.toUpperCase()==='N') y++;
        else if(i.toUpperCase()==='E') x++;
        else if(i.toUpperCase()==='W') x--;
        else if(i.toUpperCase()==='S') y--;

        let current = `${x},${y}`;
        if (visit.has(current)) {
            return true;
        } 
        else {
            visit.add(current);
        }
    }
    return false;
};
