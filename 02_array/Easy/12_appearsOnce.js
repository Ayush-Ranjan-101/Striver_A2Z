// const nums = [2, 2, 1];
const nums = [4, 1, 2, 1, 2];

const singleNumber = function  (nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        let count = (map.get(key) || 0) + 1;
        map.set(key, count);
    }

    for (const [key, value] of map) {
       if (value === 1) return key;
    }
}

console.log(singleNumber(nums));

// It can be solved with a nested loop too but that will take Time complixity - O(N^2)



// todo : XOR solution
