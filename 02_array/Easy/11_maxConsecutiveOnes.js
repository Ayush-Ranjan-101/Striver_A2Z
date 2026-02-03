// leetcode - 485

// const nums = [1, 1, 0, 1, 1, 1]
const nums = [1, 0, 1, 1, 0, 1]


function findMaxConsecutiveOnes (nums) {
    let count = 0, maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
        // as soon as we get a zero after consecutive one's
        // we reset the count
        
        if (nums[i] === 1) count++
        else count = 0;

        if (count > maxCount) maxCount = count;
    }

    return maxCount;
}

// function findMaxConsecutiveOnes (nums) {
//     let maxCount = 0;
//     let presentCount = 0
//     
//     let i = 0;
//     while (i < nums.length) {
//         presentCount = 0;
//         while(i < nums.length && nums[i] === 1){
//             presentCount++;
//             i++;
//         }
//         
//         if(presentCount > maxCount) maxCount = presentCount;
//         i++;
//     }
//
//     return maxCount;
// }


console.log(findMaxConsecutiveOnes(nums));
