const nums = [2, 3, 5]

const getLongestSubarray = function  (nums, k) {
    let sum = 0, maxLen = 0;
    let preMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        // sum till ith index
        sum += nums[i];

        // Subarray from 0 to i has sum = k
        if (sum === k) {
            maxLen = i + 1;
        }

        // (sum - k) existence shows another subarray whose sum = k
        let rem = sum - k;
        if (preMap.has(rem)) {
            maxLen = Math.max(maxLen, i - preMap.get(rem))
        }

        // Store the occurence of first prefix sum
        if (!preMap.has(sum)) {
            preMap.set(sum, i);
        }
    }

    return maxLen;
}

console.log(getLongestSubarray(nums, 5));

// Time complexity - O(n)
// Space complexity - O(n)

// Can use nested loop with 
// Time complexity - O(n^2)
// Space complexity - O(1)
