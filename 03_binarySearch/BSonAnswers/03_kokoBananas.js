// leetcode - 875

const piles = [7, 15, 6, 3], h = 8;

const totalHours = function  (piles, speed) {
    let totalH = 0;
    for (const bananas of piles) {
        totalH += Math.ceil(bananas / speed);
    }
    return totalH;
}

const minEatingSpeed = function  (piles, h) {
    let maxPile = Math.max(...piles);

    let start = 1, end = maxPile;
    let ans = maxPile;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        let totalH = totalHours(piles, mid);

        // larger number equals lesser time and vice versa
        if (totalH <= h) {  // try smaller speeds
            ans = mid;
            end = mid - 1;
        } else {  // try larger speeds
            start = mid + 1;
        }
    }

    return ans;
}
// Time complexity - O(n * log(maxPile))
// Space complexity - O(1)

console.log(minEatingSpeed(piles, h));
