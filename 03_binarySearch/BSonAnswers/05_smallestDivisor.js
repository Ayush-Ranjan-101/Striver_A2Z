// leetcode - 1283

const nums = [1, 2, 5, 9], threshold = 6;

const divisonSum = function  (nums, val) {
    let sum = 0; 
    for (let i = 0; i < nums.length; i++) {
        sum += Math.ceil(nums[i] / val);
    }
    return sum;
}

const smallestDivisor = function  (nums, threshold) {
    let start = 1;
    let end = Math.max(...nums);
    let ans = -1;

    while(start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        const sum = divisonSum(nums, mid);

        // larger numbers will have smaller sum and vice versa
        if (sum <= threshold) {  // try smaller number
            ans = mid;
            end = mid - 1;
        } else {  // sum too large try a bigger number
            start = mid + 1;
        }
    }

    return ans;
}
// Time complexity - O(n * log(maxElement))
// Space complexity - O(1)

console.log(smallestDivisor(nums, threshold));
