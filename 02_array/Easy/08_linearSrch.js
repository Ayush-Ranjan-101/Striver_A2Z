const nums = [2, 3, 4, 5, 3];

function linearSearch (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
    }
    return -1;
}
