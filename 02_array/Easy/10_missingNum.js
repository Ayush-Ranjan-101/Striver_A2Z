// leetcode 268

const nums = [9,6,4,2,3,5,7,0,1];

const missingNumber = function (nums) {
    let sum = 0;  // Sum of all array elements
    // or let sumNTerms = Math.floor(n * (n+1)/2);
    let sumNTerms = 0;  // Sum till N natural numbers
    for (let i = 0; i  < nums.length; i ++) {
        sum += nums[i];
        sumNTerms += i;
    }
    sumNTerms += nums.length;

    return sumNTerms - sum;
}

console.log(missingNumber(nums));
