// leetcode - 2095

const deleteMiddle = function  (head) {
    if (head.next === null) return null;

    let fast = head; // Moves 2 steps at a time
    let slow = head; // Moves 1 step at a time
    let prev = null; // Keeps track of the node before slow
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;  
        prev = slow;  // stays one node before slow
        slow = slow.next;
    }

    // After the loop, slow is at the middle node and prev at the node before it
    // for deletion we point prev.next to the node after slow
    prev.next = slow.next;

    // return the modified list
    return head;
}
// Time complexity - O(n), n - length of LL, traversing through the entire LL 
// Space complexity - O(1), constant space
