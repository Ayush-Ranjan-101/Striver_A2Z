let nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums);
console.log(nums);

function rotate(nums) {
    let temp = nums[0];

    // copying present elements value to it's previous index
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        nums[i-1] = nums[i];
    }

    nums[n-1] = temp;
}
