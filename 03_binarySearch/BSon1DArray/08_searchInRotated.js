// leetcode - 33

const nums = [4,5,6,7,0,1,2];

const search = function  (nums, target) {
    let low = 0, high = nums.length - 1;

    // high = mid - 1 = move to left subarray
    // low = mid + 1 = move to right subarray
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] >= nums[low]) {  // Check if the left half is sorted
            // If target lies within left half
            if (target >= nums[low] && target < nums[mid]) high = mid - 1;
            else low = mid + 1;
        } else {  // if fails then right half is sorted
            // If target lies within right half
            if (target > nums[mid] && target <= nums[high]) low = mid + 1;
            else high = mid - 1;
        }
    }

    return -1;
}
// Time complexity - O(log n)
// Space complexity - O(1)

console.log(search(nums, 0));
