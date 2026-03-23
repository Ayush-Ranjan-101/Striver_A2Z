// gfg (https://www.geeksforgeeks.org/problems/the-painters-partition-problem1535/1)

const nums = [5, 10, 30, 20, 15], k = 3;

const canPaint = function  (nums, k, maxBoard) {
    let currentBoardLength = 0;
    let painters = 1

    for (const num of nums) {
        // If adding this new board exceeds the limit add new board
        if (currentBoardLength + num > maxBoard) {
            painters++;
            currentBoardLength = num;
        } else {
            // Else continue adding boards
            currentBoardLength += num;
        }

        // small board length, more painters will be required
        if (painters > k) return false;
    }
    // Enough to complete painting with given painters,
    // but the time might not be the minimum
    return true;
}

const minTime = function  (nums, k) {
    // start - maxBoardLength as some needs to have the capacity to take the max bpard
    // end - sumOfBoardLengths as k might be 1 so at most one will paint all boards
    // not taking count of time as it is equally proportional
    let start = 0, end = 0, ans = 0;
    for (const num of nums) {
        if (num > start) start = num;
        end += num;
    }

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (canPaint(nums, k, mid)) {
            ans = mid;
            // If possible try smaller board length to minimize time required
            end = mid - 1;
        } else {
            // If not try bigger board length to equipe all painters
            start = mid + 1;
        }
    }

    return ans;
}


console.log(minTime(nums, k));
