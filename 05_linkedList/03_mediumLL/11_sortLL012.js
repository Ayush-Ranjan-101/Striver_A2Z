// gfg (https://www.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1)

// data replacement approach
const segregate = function  (head) {
    // 0th index stores 0 count
    // 1st index stores 1 count
    // 2nd index stores 2 count
    let counts = [0, 0, 0];

    let curr = head;
    // storing the frequency of 0, 1 and 2
    while (curr !== null) {
        counts[curr.data]++;
        curr = curr.next;
    }

    // i keeps track of index for counts array
    let i = 0;
    curr = head;
    while (curr !== null) {
        if (counts[i] === 0) {
            i++;  // Move to next number 
        }
        else {
            // Overwrite data
            curr.data = i;
            counts[i]--;
            curr = curr.next;
        }

    }

    return head;
}
// Time complexity - 0(n), n - length of LL, traversing through LL 
// Space complexity - O(1), constant space 

// pointer manipulation
const segregate1 = function  (head) {
    // Just one node is already sorted
    if (head.next === null) return head;

    // dummy nodes
    let head0 = {data: 0, next: null};
    let head1 = {data: 0, next: null};
    let head2 = {data: 0, next: null};

    let temp0 = head0, temp1 = head1, temp2 = head2;
    let curr = head;

    // 3 linked lists 0, 1 and 2
    while(curr !== null) {
        if (curr.data === 0) {
            temp0.next = curr;
            temp0 = temp0.next;
        } else if (curr.data === 1) {
            temp1.next = curr;
            temp1 = temp1.next;
        } else {
            temp2.next = curr;
            temp2 = temp2.next;
        }

        curr = curr.next;
    }

    // Link 0s to 1s if 1s exist, otherwise link 2s and if 2s are 0 then
    // it will simply point to null(end of LL)
    temp0.next = head1.next ? head1.next : head2.next;
    // Link 1s to 2s, if 2s are 0 then it will simply point to null
    temp1.next = head2.next;
    // Ending LL to avoid cycle
    temp2.next = null;

    return head0.next;
}
// Time complexity - O(n), n - length of LL, traversing through LL 
// Space complexity - O(1)

