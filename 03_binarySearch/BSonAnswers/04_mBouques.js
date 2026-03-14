// leetcode - 1482

const bloomDay = [1,10,3,10,2], m = 3, k = 1;

const bouquetsMade = function  (bloomDay, m, k, day) {
    let count = 0;   // consecutive bloomed flower
    let bouquetCount = 0;   // bouquets made
    for (let i = 0; i < bloomDay.length; i++) {
        if (bloomDay[i] <= day) {
            count++;
            if (count === k) {
                bouquetCount++;  // one bouquet made
                count = 0;  // reset for next bouquet
            }
        } else {
            count = 0;  // reset on break
        }
    }

    return bouquetCount;
}

const minDays = function  (bloomDay, m, k) {
    // If the array does have enought have enough flowers(m * n)
    if (m * k > bloomDay.length) return -1;

    const minDay = Math.min(...bloomDay);
    const maxDay = Math.max(...bloomDay);

    let start = minDay, end = maxDay;
    let ans = -1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        const bouquets = bouquetsMade(bloomDay, m, k, mid);

        // As more days pass more flower bloom -> more bouquets
        if (bouquets >= m) {  // try smaller days
            ans = mid;      
            end = mid - 1;
        } else {   // need more days
            start = mid + 1;
        }
    }

    return ans;
}
// Time complexity - O(n * log(maxDay - minDay + 1))
// Space complexity - O(1)

console.log(minDays(bloomDay, m, k));
