// leetcode - 328

const oddEvenList = function  (head) {
    if (head === null || head.next === null) return head;

    let odd = head, even = head.next;
    let evenHead = head.next;

    // If LL is of even length, even.next = null 
    // If LL is of odd length, odd.next = null
    while (odd.next !== null && even.next !== null) {
        // Next odd node
        odd.next = odd.next.next;
        // Next even node
        even.next = even.next.next;

        // Move to the updated odd node
        odd = odd.next;
        // Move to the updated even node
        even = even.next;
    }
    // attach even nodes after all odd nodes
    odd.next = evenHead;

    // head = odd LL Head
    return head;
}
// Time complexity - O(n), n - length of LL, traversing through the LL 
// Space complexity - O(1), constant space
