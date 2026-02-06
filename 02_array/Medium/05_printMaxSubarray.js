// const nums = [2, 3, 5, -2, 7, -4];
// const nums = [-2,1,-3,4,-1,2,1,-5,4];
const nums = [1, 2, -3, 4];

const maxSubArray = function  (nums) {
    let sum = 0, maxSum = -Infinity;
    let si = 0, ei = 0, tempStart = 0;

    for (let i = 0; i < nums.length; i++) {
        // If sum was reset to 0 in the previous step, 
        // the new potential subarray starts here.
        if (sum === 0) {
            tempStart = i;
        }
        
        sum += nums[i];

        if (sum > maxSum) {
            maxSum = sum;
            si = tempStart;
            ei = i;
        }

        if (sum < 0) {
            // The next subarray cannot include this index, 
            // so sum resets
            sum = 0;
        }

    }
    
    console.log(`${si}, ${ei}`);
    return maxSum;
}

console.log(maxSubArray(nums));
