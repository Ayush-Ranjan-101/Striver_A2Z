// gfg (https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1)

const n = 3, m = 27;

const nthRoot = function  (n, m) {
    if (m < 2) return m;

    let start = 1, end = m;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        let ans = 1;
        for (let i = 1; i <= n; i++) {
            ans *= mid;
            if (ans > m) break;  // To avoid BigInt
        }

        if (ans === m) {
            return mid;
        } else if (ans < m) {
            start = mid + 1;  // m must be between mid and m
        } else {
            end = mid - 1;  // m must be between 1 and mid
        }
    }

    return -1;
}

console.log(nthRoot(n, m));
