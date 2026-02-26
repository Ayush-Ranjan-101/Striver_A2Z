// leetcode - 493

const nums = [2, 4, 1, 3, 5];

const inversionCount = function (nums) {
    // Create one auxiliary array to be reused to save memory (O(n) space)
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


// Merges two sorted halves while counting how many elements from the 
// right half are smaller than elements from the left half.
const merge = function (nums, temp, l, mid, h) {
    let i = l;          // Starting index for left subarray
    let j = mid + 1;    // Starting index for right subarray
    let k = l;          // Starting index for temporary array
    let invCount = 0;

    // While there are elements in both subarrays
    while (i <= mid && j <= h) {
        if (nums[i] <= nums[j]) {
            // just merge, left element is smaller, no inversion
            temp[k++] = nums[i++];
        } else {
            // here nums[i] > nums[j]
            // Since the left subarray is sorted, if nums[i] is greater than nums[j],
            // then all elements from nums[i] to nums[mid] are also greater than nums[j].
            temp[k++] = nums[j++];
            invCount += (mid - i + 1); // Add all remaining left elements to count
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

const inversionCount1 = function  (nums) {
    let count = 0;
    for (let j = 1; j < nums.length; j++) {
        const key = nums[j];
        let i = j - 1;

        while (i >= 0 && nums[i] > key) {
            nums[i + 1] = nums[i];
            count++;
            i--;
        }

        nums[i + 1] = key;
    }
    console.log(nums);
    return count;
}
// Time complexity : O(n2)
// Space complexity : O(1)

console.log(inversionCount(nums));
// comment out the above one before running the bottom one
// console.log(inversionCount1(nums));
