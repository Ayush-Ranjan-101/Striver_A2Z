// leetcode - 1903

const num = "420638"

const largestOddNumber = function  (num) {
    let lastOddIdx = -1
    // Finding the index of last odd element since it will be the largest odd number
    for (let i = num.length - 1; i >= 0; i--) {
        if (Number(num[i]) % 2 === 1) {
            lastOddIdx = i;
            break;
        }
    }

    if (lastOddIdx === -1) return "";

    // Skip leading zeros
    let i = 0
    while (i <= lastOddIdx && num[i] === '0') i++;

    return num.substring(i, lastOddIdx + 1);
}
// Time complexity : O(n)
// Space complexity : O(1)

console.log(largestOddNumber(num));
