const nums = [10, 5, 2, 7, 1, 9];

// Sliding window
// function longestSubarray (nums, k) {
//     let left = 0;
//     let currSum = 0;
//     let maxLen = 0;
//
//     for (let right = 0; right < nums.length; right++) {
//         currSum += nums[right];
//
//         // Remove the left elements from the subarray
//         while (currSum > k && left <= right) {
//             currSum -= nums[left];
//             left++;
//         }
//
//         if (currSum === k) {
//             maxLen = Math.max(maxLen, right - left + 1);
//         }
//     }
//     return maxLen;
// }

console.log(longestSubarray(nums, 15));
