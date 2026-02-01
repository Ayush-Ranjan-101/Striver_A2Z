const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 4, 4, 5];

let i = 0, j = 0;
const res = []

while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
        // Add if empty or not duplicate
        if (res.length === 0 || res[res.length - 1] !== arr1[i]) {
            res.push(arr1[i]);
        }
        i++;
        j++;
    } else if (arr1[i] < arr2[j]) {
        if (res.length === 0 || res[res.length - 1] !== arr1[i]) {
            res.push(arr1[i]);
        }
        i++;
    } else {
        if (res.length === 0 || res[res.length - 1] !== arr2[j]) {
            res.push(arr2[j]);   
        }
        j++
    }
}

while (i < arr1.length) {
    if (res.length === 0 || res[res.length - 1] !== arr1[i])
        res.push(arr1[i]);
    i++;
}

// Append remaining elements from arr2
while (j < arr2.length) {
    if (arr2.length === 0 || arr2[arr2.length - 1] !== arr2[j])
        arr2.push(arr2[j]);
    j++;
}

console.log(res)
