/*
  December 02, 2023
  - Runtime Achieved: 3 ms 
  - Memory Achieved: 7.3 MB
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
    ListNode* middleNode(ListNode* head) { 
        ListNode* nodePace1 = head;
        ListNode* nodePace2 = head;
        while (nodePace1!=NULL && nodePace1->next!=NULL) {
            nodePace1 = nodePace1->next->next;
            nodePace2 = nodePace2->next;
        } 
        return nodePace2; 
    }
};
