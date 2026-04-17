// leetcode - 160

const getLength = function  (head) {
    let length = 0;
    let curr = head;
    while (curr !== null) {
        length++;
        curr = curr.next;
    }

    return length;
}

const getIntersectionNode = function  (headA, headB) {
    // Calculate lengths
    let lengthA = getLength(headA);
    let lengthB = getLength(headB);

    // difference between lengths of LL
    let diff = 0;
    // Ensure headA is always the longer list
    if (lengthB > lengthA) {
        let temp = headA;
        headA = headB;
        headB = temp;

        diff = lengthB - lengthA
    } else {
        diff = lengthA - lengthB;
    }

    // Move headA forward by the difference to match headB
    while (diff !== 0) {
        headA = headA.next;
        diff--;
    }

    // Move both until they meet at a node
    while (headA !== null) {
        if (headA === headB) return headA
        headA = headA.next;
        headB = headB.next;
    }

    // null if they don't meet
    return null;
}
// n - smaller LL, m - bigger LL
// Time complexity - O(n+m), traversing both the lists
// Space complexity - O(1), constant space

// Using hashmap or set will give TC - O(n+m), but SC - O(n)


// By making both the pointers travel the same distance i.e., headA LL + headB LL 
// they are forced to synchronize.Their difference in length is nutralized by
// making them traverse the other LL.
const getIntersectionNode1 = function  (headA, headB) {
    let tempA = headA;
    let tempB = headB;

    // If the lists intersect they will eventually meet at the intersectino node
    // If they don't, they will reach 'null' at the same time and exit
    while (tempA !== tempB) {
        // if null then traverse the other LL
        tempA = (tempA === null) ? headB : tempA.next;
        tempB = (tempB === null) ? headA : tempB.next;
    }

    // tempA/tempB is now either the intersection node or null
    return tempA;
}
// n - smaller LL, m - bigger LL
// Time complexity - O(n+m), Each other traverses both lists 
// Space complexity - O(1), constant space
