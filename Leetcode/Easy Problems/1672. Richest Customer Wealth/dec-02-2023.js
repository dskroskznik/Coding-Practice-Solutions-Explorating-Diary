/*
  December 02, 2023
  - Runtime Achieved: 54 ms 
  - Memory Achieved: 41.8 MB
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let m = accounts;
    let total = 0;
    for(let i = 0;i<m.length;i++)
    {
        let n = accounts[i];
        temp = 0;
        for(let j = 0;j<n.length;j++) 
        {
            temp += n[j];
            if(temp > total) {total = temp;}
        }
    }
    return total;
};
