// gfg (https://www.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1)

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

const reverseLL = function  (head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        const temp = curr.next;

        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
}

const addOne = function  (node) {
    // Reverse the LL to get the last node(digit), for easy of addition
    let newHead = reverseLL(node);
    
    let prev = null;
    let curr = newHead;

    // Iterate through the reversed list and add one
    while (curr !== null) {
        // Use modulo to handle the digit (e.g., 9 + 1 = 10; 10 % 10 = 0)
        curr.data = (curr.data + 1) % 10;

        // If the result isn't 0, it means there was no carry
        // We can stop processing and break early.
        if (curr.data !== 0) break;

        prev = curr;
        curr = curr.next;
    }
    
    //Handle the "All Nines" case (e.g., 999 + 1 = 1000)
    // If we reached the end of the list and the last digit processed was 0,
    // we need to append a new node with '1' at the end.
    if (curr === null && prev !== null && prev.data === 0) {
        const newNode = new Node(1)
        prev.next = newNode;
    }

    // Reverse the list back to restore the original order
    newHead = reverseLL(newHead)
    return newHead;
}
// Time complexity - O(n), n - length of LL, traversing and reversing LL
// Space complexity - O(1), constant space
