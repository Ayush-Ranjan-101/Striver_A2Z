// leetcode - 128

// const nums = [100, 4, 200, 1, 3, 2];
const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

const longestConsecutive = function  (nums) {
    const set = new Set();
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }

    for (const value of set) {
        if (!set.has(value-1)) {
            let count = 0, x = value;
            while (set.has(x)) {
                count++;
                x = x + 1;
            }
            maxCount = Math.max(maxCount, count);
        }
    }

    return maxCount;
}

console.log(longestConsecutive(nums));

// Time complexity - O(n + n) = O(2n) = O(n)
// Space complexity - O(n) (Set stores all elements if all are unique)
