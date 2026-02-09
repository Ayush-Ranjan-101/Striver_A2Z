// leetcode - 48

const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

const rotate = function  (matrix) {
    const n = matrix.length;

    // Transpose the matrix - convert rows to columns
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Reverse the matrix
    for (let i = 0; i < n; i++) {
        let l = 0, r = n - 1;
        while (l < r) {
            let temp = matrix[i][l];
            matrix[i][l] = matrix[i][r];
            matrix[i][r] = temp;
            l++;
            r--;
        }
    }}

rotate(matrix);
console.log(matrix);

// Time complexity - O(n^2)
// Space complexity - O(1)

// Another simpler way would be use another 2d array
