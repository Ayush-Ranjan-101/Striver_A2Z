const nums = [10, 22, 12, 3, 0, 6]

const leaders = function  (nums) {
    let n = nums.length, leader = nums[n - 1];
    const result = [];

    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] >= leader) {
            result.push(nums[i]);
            leader = nums[i];
        }
    }

    result.reverse();
    return result;
}

console.log(leaders(nums))

// Time complexity - O(n)
// Space complexity - O(n) (Array can be in descending order)

// Can use nested loop too,
// Time complexity - O(n^2)
// Space complexity - O(1)
