// gfg (https://www.geeksforgeeks.org/problems/aggressive-cows/1)

const stalls = [1, 2, 4, 8, 9], k = 3

const canPlace = function  (stalls, k, minD) {
    let prev = stalls[0];
    k--;
    for (let i = 1; i < stalls.length; i++) {
        if (stalls[i] - prev >= minD) {
            prev = stalls[i];
            k--;
        }
        if (k === 0) return true;
    }
    return false;
}

const aggressiveCows = function  (stalls, k) {
    stalls.sort((a, b) => a - b);
    let start = 1, end = stalls[stalls.length - 1] - stalls[0];
    let ans = 0;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        
        if (canPlace(stalls, k, mid)){
            ans = mid;
            start = mid + 1;  // Try larger distance
        } else {
            end = mid - 1;  // Try smaller distance
        }
    }

    return ans;
}
// Time complexity - O(n log n + N*log(end))  (n log n - sorting) (log(end) - bs)
// Space complexity - O(1)
console.log(aggressiveCows(stalls, k));
