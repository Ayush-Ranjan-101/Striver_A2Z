// leetcode - 88

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

const merge = function  (nums1, m, nums2, n) {
    // i = last valid element in nums1
    // j = last valid element in nums2
    // k = lst available slot in the combined nums1 array
    let i = m - 1, j = n - 1, k = m + n - 1;

    // compare elements from the back and move the larger ones to the right
    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // move the leftout elements of nums2 in nums1 
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    // not doing the same for nums1 (i) as j runs out the remaining elements of i will
    // already be in its right place
}

merge(nums1, m, nums2, n)
console.log(nums1);

// Time complexity - O(m + n)
// Space complexity - O(1)
