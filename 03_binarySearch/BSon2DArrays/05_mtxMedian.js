// gfg (https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1)

const mat = [
    [1, 3, 5], 
    [2, 6, 9], 
    [3, 6, 9]
]

// Upper bound gives the number of elements smaller than and equal to that 'x' 
const upperBound = function  (arr, x) {
    let low = 0, high = arr.length;

    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);

        if (arr[mid] <= x) {
            low = mid + 1
        } else {
            high = mid;
        }
    }

    return low;
}

const median = function  (mat) {
    const cols = mat[0].length, rows = mat.length;
    let low = mat[0][0], high = mat[0][cols - 1];

    // lowest and highest values of matrix
    for (let i = 1; i < mat.length; i++) {
        low = Math.min(mat[i][0], low);
        high = Math.max(mat[i][cols - 1]);
    }
    
    const desiredCount = Math.floor((cols * rows + 1) / 2);
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        let count = 0;

        for (let i = 0; i < rows; i++) {
            // count total no.of elements smaller than mid
            count += upperBound(mat[i], mid);
        }

        if (count >= desiredCount) {
            // enough elements <= mid; mid could be the median. 
            // we search lower to find the SMALLEST value that satisfies the count.
            high = mid;
        } else {
            // if our current guess (mid) is too small
            // not enough elements <= mid, so median must be in upper half
            low = mid + 1;
        }
    }

    return low; 
}
// Time complexity - O(rows * log(max - min) * log(cols)), 
// rows - rotating though rows for upperBound fnc
// log(max - min) - binary search on possible mid value
// log(cols) - searching elements smaller than mid
// Space complexity - O(1)

console.log(median(mat));
