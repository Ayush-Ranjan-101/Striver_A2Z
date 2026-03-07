// gfg - (https://www.geeksforgeeks.org/problems/square-root/1)

const n = 36;

const floorSqrt1 = function  (n) {
    if (n < 2) return n;

    let start = 1, end = n;
    let ans = 0;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        // Using division to avoid BigInt
        if (mid <= n / mid) {
            ans = mid;  // mid is the potential floor
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return ans;
}

const floorSqrt = function  (n) {
    let start = 1, end = n;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        let sqr = mid * mid;
            
        if (sqr === n) return mid;
        else if (sqr > n) end = mid - 1;
        else start = mid + 1;
    }
    
    return end;
}

console.log(floorSqrt(n));
console.log(floorSqrt1(n));
