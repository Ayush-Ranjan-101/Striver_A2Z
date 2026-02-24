// leetcode - 56

const nums = [[1,3], [15,18], [8,10], [2,6]]

const merge = function  (intervals) {
    if (intervals.length <= 1) return intervals;

    // Ensures pverlaping intervals are adjacent
    intervals.sort((a, b) => a[0] - b[0]);

    const res = [];

    // Initialized with first interval to start the comparison
    let prev = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        // Check for overlap
        if (prev[1] >= intervals[i][0]) {
            // Merge by updating the 1st idx of interval
            // using .max to handle cases like [1, 8] [3, 6]
            prev[1] = Math.max(intervals[i][1], prev[1]);
        } else {
            // If no overlap push the prev
            res.push(prev);
            prev = intervals[i];
        }
    }

    // push the last interval left out 
    res.push(prev);
    return res;
}

console.log(merge(nums));

// Time complexity : O(n log n) (sorting (n log n) + linear search (n))
// Space complexity : O(log n) (Space consumed in sorting)
