// 410

const nums = [7,2,5,10,8], k = 2;

const canSplitWithMaxSum = function  (nums, k, maxCapacity) {
    let currentSubarraySum = 0;
    let subarrayUsed = 1;  // Starting with first subarray

    for (const num of nums) {
        // If adding the current num exceeds the limit, start a new subarray
        if (currentSubarraySum + num > maxCapacity) {
            subarrayUsed++;
            currentSubarraySum = num;
        } else {
            // Else keep adding
            currentSubarraySum += num;
        }

        // Capacity if too small if more subarrays are needed then k
        if (subarrayUsed > k) return false;
    }

    // Enought Capacity for k subarrays, but their difference might not be minimum
    return true;
}

const splitArray = function  (nums, k) {
    // start -> minCapacity as one of the subarray will hold the largest element
    // end -> maxCapacity as k might be 1 so at most it will take the complete array
    let start = 0, end = 0, ans = 0;
    for (const num of nums) {
        if (num > start) start = num;
        end += num;
    }

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (canSplitWithMaxSum(nums, k, mid)) {
            ans = mid;
            // If possible try smaller capacity to minimize the sum
            end = mid - 1;
        } else {
            // If not we must increase the capacity
            start = mid + 1;
        }
    }

    return ans;
}
// Time complexity - O(n) + O(n * log(totalSum - maxElement))
// Space complexity - O(1)

console.log(splitArray(nums, k));
