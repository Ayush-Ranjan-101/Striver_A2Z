// gfg (https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1)

const nums = [1, 1, 2, 2, 2, 2, 3];

const countFreq = function  (nums, target) {
    let low = 0, high = nums.length - 1;
    let lastIdx = -1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (nums[mid] === target) {
            lastIdx = mid;
            low = mid + 1;  // Find last occurence
        } else if (target < nums[mid]) {
            high = mid - 1;  // Move left
        } else {
            low = mid + 1;   // Move right
        }
    }

    if (lastIdx === -1) return 0;

    low = 0, high = lastIdx;
    let firstIdx = -1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (nums[mid] === target) {
            firstIdx = mid;
            high = mid - 1;   // Find first occurence
        } else if (target < nums[mid]) {
            high = mid - 1;  // Move left
        } else {
            low = mid + 1;  // Move right
        }
    }

    return lastIdx - firstIdx + 1;
}
// Time complexity - O(log n)
// Space complexity - O(1)

console.log(countFreq(nums, 3));
