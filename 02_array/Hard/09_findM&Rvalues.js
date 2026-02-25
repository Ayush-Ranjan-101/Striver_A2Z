// gfg (https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1)

const nums = [1, 2, 3, 6, 7, 5, 7];

const findTwoElement = function  (nums) {
    let n = nums.length;
    // Sum till n numbers and square till n numbers
    let sN = n * (n + 1) / 2, s2N = n * (n + 1) * (2 * n + 1) / 6;

    // sum and sum of squares of array elements 
    let s = 0, s2 = 0;
    for (let i = 0; i < n; i++) {
        s += nums[i];
        s2 += nums[i] * nums[i];
    }

    // Compute the difference values
    let val1 = s - sN;

    // S2 - S2n = X^2 - Y^2
    let val2 = s2 - s2N;

    // Calculate X + Y using X + Y = (X^2 - Y^2) / (X - Y)
    val2 = val2 / val1;

    // Calculate X and Y from X + Y and X - Y
    // X = ((X + Y) + (X - Y)) / 2
    // Y = X - (X - Y)
    let x = (val1 + val2) / 2;
    let y = x - val1;
    return [Math.floor(x), Math.floor(y)];
}

// Time complexity - O(n)
// Space complexity - O(1)

// const findTwoElement = function  (nums) { 
//     const freqMap = new Map(), n = nums.length;
//     let repeating = -1, missing = -1;
//     
//     // Fill the map with freq
//     for (let i = 0; i < n; i++) {
//         const count = (freqMap.get(nums[i]) || 0) + 1;
//         freqMap.set(nums[i], count);
//     }
//
//     // Check the frequency for every number 1 - n
//     for (let i = 1; i <= n; i++) {
//         const count = freqMap.get(i) || 0;
//         
//         if (count === 2) repeating = i;
//         else if (count === 0) missing = i;
//
//         if (repeating !== -1 && missing !== -1) break;
//     }
//
//     return [repeating, missing];
// }

// Time complexity - O(2*n)
// Space complexity - O(n)

console.log(findTwoElement(nums));
