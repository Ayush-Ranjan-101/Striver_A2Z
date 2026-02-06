// leetcode - 53

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums = [2, 3, 5, -2, 7, -4]

const maxSubArray = function  (nums) {
    let sum = 0, maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]; 

        // Stores max subarray or the smalles -ve element 
        // if array is all -ve, the max subarray will be smallest -ve element
        // or 0 if it is there
        maxSum = Math.max(maxSum, sum);

        if (sum < 0) {
            sum = 0;        
        }
    }

    return maxSum;
}

console.log(maxSubArray(nums));

// Time complexity - O(n)
// Space complexity - O(1)

// Can use nested loop (i, j) with 
// Time complexity - O(n^2)
// Space complexity - O(1)
