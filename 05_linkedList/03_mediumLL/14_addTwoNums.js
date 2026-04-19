// leetcode - 2

const addTwoNumbers = function  (l1, l2) {
    // dummy node - starting point of the new list
    let dummy = new ListNode(-1, null);
    let curr = dummy;
    let bal = 0;   // holds the carry val for next nodes if sum > 9

    // Continue as long as there is some carry(bal) value
    while (l1 !== null || l2 !== null || bal !== 0) {
        // If lists are null value = 0
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;

        // Calculate sum and new carry
        let sum = v1 + v2 + bal;
        bal = Math.floor(sum / 10);
        let val = sum % 10

        // create and attach the new node
        let newNode = new ListNode(val, null);
        curr.next = newNode;
        curr = curr.next;

        // move to next node if they exist
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    // returning the actual head
    return dummy.next;
}
// Time complexity - O(max(n, m)), n and m are the lengths of both the lists
// Traversing both the lists fully
// Space complexity - O(max(n, m)), storing result in a completely new list 
