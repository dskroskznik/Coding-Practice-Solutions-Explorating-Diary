/*
  December 24, 2023
  - Runtime Achieved: 4 ms 
  - Memory Achieved: 7.2 MB
*/
class Solution {
public:
    bool isPathCrossing(string path) {
        int x = 0, y = 0;
        unordered_set<string> visit;
        visit.insert("0,0");

        for(char direction : path) {
            if(toupper(direction) == 'N') y++;
            else if(toupper(direction) == 'E') x++;
            else if(toupper(direction) == 'W') x--;
            else if(toupper(direction) == 'S') y--;

            string current = to_string(x) + "," + to_string(y);
            if(visit.find(current) != visit.end()) {
                return true;
            } 
            else {
                visit.insert(current);
            }
        }
        return false;
    }
};
