// leetcode - 1011

const nums = [1,2,3,4,5,6,7,8,9,10], days = 5;

const findDays = function  (weights, capacity) {
    let daysCount = 1;
    let totalWeight = 0;

    for (let i = 0; i < weights.length; i++) {
        if (totalWeight + weights[i] > capacity){
            daysCount++;
            totalWeight = weights[i];
        } else {
            totalWeight += weights[i];
        }
    }

    console.log(daysCount);
    return daysCount;
}

const shipWithinDays = function  (weights, days) {
    let start = 0, end = 0;
    for (let i = 0; i < weights.length; i++) {
        // weights[max] = start, as we can't break a package into pieces and
        // so the ship should be atleast of weight[max] to ship that package
        if (weights[i] > start) start = weights[i];
        // sum of weights = end, as the highest ship's capacity needs to be 
        // the sum of all elements to ship everything at once
        end += weights[i];
    }

    while (start < end) {
        const mid = start + Math.floor((end - start) / 2);
        const daysCount = findDays(weights, mid);

        // As capacity increases no of days decreases and vice versa
        if (daysCount <= days) {
            end = mid;  // try smaller capacities
        } else {
            start = mid + 1;  // try bigger capacities
        }
    }

    return start;
}

console.log(shipWithinDays(nums, days));
