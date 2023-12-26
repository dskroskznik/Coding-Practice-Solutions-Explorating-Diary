/*
  December 15, 2022
  - Runtime Achieved: 9 ms
  - Memory Achieved: 8 MB
*/
class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        int i, j, sum;
        int wealth = 0;
        int cust = accounts.size();
        int acc = accounts[0].size();
        for(i=0;i<cust;i++) {
            sum = 0;
            for(j=0;j<acc;j++) {
                sum += accounts[i][j];
                wealth = max(wealth,sum);
            }
        }
        return wealth;
    } 
};
