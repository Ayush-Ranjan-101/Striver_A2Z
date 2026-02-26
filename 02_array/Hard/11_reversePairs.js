// leetcode - 493

const nums = [2, 4, 3, 5, 1];

const reversePairs = function  (nums) {
    const temp = new Array(nums.length);
    return mergeSort(nums, temp, 0, nums.length - 1);
}

const mergeSort = function (nums, temp, l, h) {
    let count = 0;
    if (l < h) {
        // midpoint to split the array
        const mid = Math.floor((l + h) / 2);
        // inversions in the left sub-array
        count += mergeSort(nums, temp, l, mid);
        // inversions in the right sub-array
        count += mergeSort(nums, temp, mid + 1, h);
        // inversions that happen between the left and right subArrays
        count += merge(nums, temp, l, mid, h);
    }
    return count;
}

const merge = function (nums, temp, l, mid, h) {
    let invCount = 0;
    let j = mid + 1;

    // Find reverse pairs separately
    for (let i = l; i <= mid; i++) {
        while (j <= h && nums[i] > 2 * nums[j]) {
            j++;
        }
        invCount += (j - (mid + 1));
    }

    // Standard merge sort from here
    let i = l;          // Starting index for left subarray
    j = mid + 1;        // Starting index for right subarray
    let k = l;          // Starting index for temporary array

    while (i <= mid && j <= h) {
        if (nums[i] <= nums[j]) {
            temp[k++] = nums[i++];
        } else {
            temp[k++] = nums[j++];
        }
    }

    // Copy any remaining elements from the left
    while (i <= mid) {
        temp[k++] = nums[i++];
    }

    // Copy any remaining elements from the right
    while (j <= h) {
        temp[k++] = nums[j++];
    }

    // Copy the sorted elements back from temp to the original nums array
    // This is necessary so the next level of recursion works with sorted data.
    for (let index = l; index <= h; index++) {
        nums[index] = temp[index];
    }

    return invCount;
}
// Time complexity : O(n log n)
// Space complexity : O(n)


console.log(reversePairs(nums)); 
