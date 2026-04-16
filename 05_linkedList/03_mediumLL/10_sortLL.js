// Leetcode - 148

const mergeSort = function  (list1, list2) {
    const dummy = {
        val: -1,
        next: null
    }

    // temp for iteration and not losing head(dummy.next)
    let temp = dummy;
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }

    // connecting what ever is lefft among the two
    if (list1 !== null) {
        temp.next = list1;
    } else {
        temp.next = list2
    }

    // returning sorted LL
    return dummy.next;
}

const sortList = function  (head) {
    if (head === null || head.next === null) return head;

    // fast = head.next not head to bring the slow one node before the middle
    // for even LLs to have to lists of equal length
    let fast = head.next;
    let slow = head;
    // Using fast and slow pointers to reach the middle node
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // now slow is the middle element
    let right = slow.next; // right part of LL
    slow.next = null  // Breaking LL
    let left  = head;  // left part of LL

    // Recursive calls to get the smallest possible halves sorted first,
    // which will later on solve bigger halves
    left = sortList(left);
    right = sortList(right);

    // returning sorted list from two LL
    return mergeSort(left, right);
}
// Time complexity - O(n logn), we look at n element per mergeSort() so n 
// log n for splitting the LL with sortList()
// Space complexity - O(1), constant space without call stack
// Space complexity - O(log n), call stack
