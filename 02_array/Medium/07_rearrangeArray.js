// leetcode - 2149

// const nums = [3, 1, -2, -5, 2, -4];
// const nums = [-1,1];
const nums = [28,-41,22,-8,-37,46,35,-9,18,-6,19,-26,-37,-10,-9,15,14,31];

const rearrangeArray = function  (nums) {
    const arr = new Array(nums.length);
    let neg = 1, pos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            arr[pos] = nums[i];
            pos += 2;
        } else {
            arr[neg] = nums[i]
            neg += 2;
        }
    }

    return arr;
}

// Since we are asked to preserve order we are doing it with an extra space
// otherwise we could have gone with two pointer and places +ve and -ve elements
// at two sides of the array respectively and so on
console.log(rearrangeArray(nums));

// Time complexity : O(n)
// Space complexity : O(n) (Returning in all elements in a new array)
