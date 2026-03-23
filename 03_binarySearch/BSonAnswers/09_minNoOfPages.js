// gfg(https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1)

const nums = [12, 34, 67, 90], k = 2;

const canAllocate = function  (nums, k, maxP) {
    let studentCount = 1
    let pageCount = 0;
    for (const num of nums) {
        if (pageCount + num > maxP) {
            studentCount++;
            pageCount = num;
        } else {
            pageCount += num;
        }

        if (studentCount > k) return false;
    }
    return true;
}

const findPages = function  (nums, k) {
    if (nums.length < k) return -1;
    let start = 0, end = 0;
    for (const num of nums) {
        // start = nums[max] as one of the student will hold the max page book
        if (num > start) start = num;
        // end = sum(nums) as the no.of student might be 1 so must have all books
        end += num;
    }
    let ans = 0;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (canAllocate(nums, k, mid)) {
            ans = mid;
            // The limit 'mid' works! We finished all books. 
            // Now try a SMALLER limit to see if we can minimize further.
            end = mid - 1;
        } else {
            // 'mid' is too small! We ran out of students before finishing the books.
            // We must INCREASE the page limit per student.
            start = mid + 1;
        }
    }

    return ans;
}
// Time complexity - O(n) + O(n * log(totalSum - maxElement))
// Space complexity - O(1)

console.log(findPages(nums, k));
