/*
  December 20, 2023
  - Runtime Achieved: 4 ms 
  - Memory Achieved: 47.1 MB
*/
class Solution {
public:
    int buyChoco(vector<int>& prices, int money) {
        int output = 0;
        int firstmin = INT_MAX;
        int secondmin = INT_MAX;
        if(money<1) return money;
        for(int i=0;i<prices.size();i++) {
            if(prices[i] < firstmin)
                secondmin = exchange(firstmin, prices[i]);
            else 
                secondmin = min(secondmin, prices[i]);
        } 
        output = money-firstmin-secondmin;  
        return (output>=0) ? output : money;
    }
};
