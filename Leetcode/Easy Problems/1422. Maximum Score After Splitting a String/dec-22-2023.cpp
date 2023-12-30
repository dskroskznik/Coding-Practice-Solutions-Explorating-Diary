/*
  December 22, 2023
  - Runtime Achieved: 4 ms
  - Memory Achieved: 6.6 MB
*/
class Solution {
public:
    int maxScore(string s) {
        int len = s.length();
        int maxscore, score, right = 0;
        if (s[0]=='0') score = 1;
        else score = 0;
        maxscore = score;
        for(int left = 1;left<len-1;left++) {
            if(s[left]=='0')
                score += 1;
            else {
                score -= 1;
                right += 1;
            }
            maxscore = max(score,maxscore);
        }
        if(s[len-1]=='1') right += 1;
        maxscore = maxscore + right;
        return maxscore;
    }
};
