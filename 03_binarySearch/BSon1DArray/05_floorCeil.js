// gfg ceil (https://www.geeksforgeeks.org/problems/ceil-in-a-sorted-array/1)
// gfg floor (https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1)

const nums = [3, 4, 4, 7, 8, 10];

const floorCeil = function  (nums, target) {
    // Find floor
    let left = 0, right = nums.length - 1;
    let floor = -1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (target >= nums[mid]) {
            floor = nums[mid];
            left = mid + 1;  // Move right
        } else {
            right = mid - 1;  // Move left
        }
    }

    // Find ceil
    left = 0, right = nums.length - 1;
    let ceil = -1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (target <= nums[mid]) {
            ceil = nums[mid];
            right = mid - 1;  // Move left
        } else {
            left = mid + 1;  // Move right
        }
    }

    return [floor, ceil]
}
// Time complexity : O(log n)
// Space complexity : O(1)

console.log(floorCeil(nums, 5));
