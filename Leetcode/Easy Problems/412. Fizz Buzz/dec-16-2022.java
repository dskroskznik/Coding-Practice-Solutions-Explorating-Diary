/*
  December 16, 2022
  - Runtime Achieved: 2 ms
  - Memory Achieved: 43.2 MB
*/
class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> result = new ArrayList<>(n);
        int i;

        for(i=1;i<=n;i++) 
        {
            String res = "";

            if((i%3)==0) {res += "Fizz";}
            if((i%5)==0) {res += "Buzz";}
            if(res.isEmpty()) {res += String.valueOf(i);}
            
            result.add(res);
        }
        
        return result;
    }
}
