// leetcode - 19

// Sliding window logic - using fast we define the no.of nodes that are
// there after nth node that is to removed.
// Placing slow just before the 
const removeNthFromEnd = function  (head, n) {
    let dummy = { next: head };
    let fast = dummy;
    let slow = dummy;

    // Move fast pointer n + 1 steps ahead to create the gap
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both pointers by 1 step, until fast reaches the end
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // slow is right before that node, that is to be removed
    slow.next = slow.next.next;

    // returing dummy.next because the original head might have been removed
    return dummy.next;
}
// Time complexity - O(n), n - length 0f LL, traversing through the entire LL 
// Space complexity - O(1), constant space
