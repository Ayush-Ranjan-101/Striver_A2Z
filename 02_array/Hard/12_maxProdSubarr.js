// leetcode - 152

// const nums = [2, 3, -2, 4];
// const nums = [-3,-1,-1];
// const nums = [-2, 0, -1];
const nums = [1,4,-4,5,-2, 1,-1,-2,-3, 0, 3];

const maxProduct = function  (nums) {
    let prefix = 1, sufix = 1, max = nums[0];
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        prefix *= nums[i];
        sufix *= nums[n-i-1];

        max = Math.max(max, prefix, sufix);

        if (prefix === 0) prefix = 1;
        if (sufix === 0) sufix = 1;
    }


    return max;
}
// Time complexity : O(n)
// Space complexity : O(1)

console.log(maxProduct(nums));
