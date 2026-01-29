// leetcode - 169

const nums = [2, 2, 1, 1, 1, 2, 2]

const bestSol = function (nums) {
    let ele = null;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        // 0 indicates that there was no majority so far
        if (count === 0) {
            ele = nums[i];
        }

        // if (nums[i] === ele) {
        //     count++:
        // } else {
        //     count--
        // }

        // Similar to above
        count += (nums[i] === ele) ? 1 : -1;
    }

    return ele;
}
// Time complexity - O(n) & Space complexity - O(1)
console.log(bestSol(nums));


// const bestSol = function (nums) {
//     const map = new Map();
//     const bar = nums.length/2;
//
//     for (let i = 0; i < nums.length; i++) {
//         let key = nums[i];
//
//         // Update count
//         let count = (map.get(key) || 0) + 1;
//         // Set new frequency of element
//         map.set(key, count);
//
//         // Since only one element can be > n/2, we return it immediately
//         if (count > bar) {
//             return key;
//         }
//     }
// }
// Time complexity - O(n) & Space complexity - O(n)
