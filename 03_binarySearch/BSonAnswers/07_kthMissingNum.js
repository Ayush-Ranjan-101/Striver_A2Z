// leetcode - 1539

const nums = [2,3,4,7,11], k = 5;

const findKthPositive = function  (nums, k) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        // numbers missing till mid
        const missing = nums[mid] - (mid + 1);
        
        if (missing < k) {
            start = mid + 1; // Move to right
        } else {
            end = mid - 1;  // Move to left
        }
    }

    return k + start;
}

console.log(findKthPositive(nums, k));
