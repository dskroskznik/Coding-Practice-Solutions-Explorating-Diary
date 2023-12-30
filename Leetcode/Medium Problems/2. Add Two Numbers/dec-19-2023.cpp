/*
  December 19, 2023
  - Runtime Achieved: 23 ms
  - Memory Achieved: 71.9 MB
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        int sum, hold = 0;
        int val1, val2, nextrange;
        ListNode* solve = new ListNode(0);
        ListNode* current = solve;
        while(l1 != NULL || l2 != NULL || hold != 0) {
            val1 = l1 ? l1->val : 0; // [2] , [4] , [3] 
            val2 = l2 ? l2->val : 0; // [5] , [6] , [4]
            sum = val1+val2+hold; // [2+5+0] , [4+6+0] , [3+4+1]
            nextrange = sum % 10; // [7] , [0] , [8]
            hold = sum / 10; // [0] , [0] , [1]

            current->next = new ListNode(nextrange); // next node is nextrange found
            current = current->next; // implement
            l1 = l1 ? l1->next : nullptr; // check
            l2 = l2 ? l2->next : nullptr;
        }
        return solve->next;
    }
};
