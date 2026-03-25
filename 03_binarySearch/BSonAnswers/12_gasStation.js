// gfg (https://www.geeksforgeeks.org/problems/minimize-max-distance-to-gas-station/1)

const stations = [1, 2, 3, 4, 5], k = 7;

const numberOfGasStationsRequired = function  (stations, dist) {
    let count = 0;
    for (let i = 1; i < stations.length; i++) {
        const diff = stations[i] - stations[i - 1];
        let numberInBetween = Math.floor((diff - 0.00000001) / dist);
        if (diff === dist * numberInBetween) {
            numberInBetween--;
        }
        count += numberInBetween;
    }
    return count;
}

const minMaxDist = function  (stations, k) {
    let start = 0, end = 0;
    for (let i = 1; i < stations.length; i++) {
        const diff = stations[i] - stations[i-1];
        if (diff > end) end = diff; 
    }

    const diff = 1e-6;
    
    while (end - start > diff) {
        const mid = start + ((end - start) / 2);
        const count = numberOfGasStationsRequired(stations, mid);

        if (count > k) {
            start = mid;
        } else {
            end = mid;
        }
    }

    return end;
}
// Tune complexity - O(n log(maxDistance / preision))

console.log(minMaxDist(stations, k));
