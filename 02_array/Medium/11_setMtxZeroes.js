// leetcode - 73

// let matrix = [[1,1,1],[1,0,1],[1,1,1]];
let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]

const setZeroes = function  (matrix) {
    const m = matrix.length;  // rows
    const n = matrix[0].length; // columns

    let firstRowZero = false;
    let firstColZero = false;

    // Check if first row has a zero
    for (let i = 0; i < n; i++) {
        if (matrix[0][i] === 0) {
            firstRowZero = true;
            break;
        }
    }

    // Check if first column has a zero
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }

    // use first row and column as markers
    for (let i =1; i < m; i++) {  // rows
        for (let j = 1; j < n; j++) {  // cols
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // set cells to zero based on markers
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero the first row if it had zero 
    if (firstRowZero) {
        for (let i = 0; i < n; i++) {
            matrix[0][i] = 0;
        }
    }

    // Zero the first column if it had a zero
    if (firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
}

setZeroes(matrix);
console.log(matrix);

// Time complexity - O(m + n)
// Space complexity - O(1)
