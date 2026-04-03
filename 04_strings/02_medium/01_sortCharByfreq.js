// leetcode - 451

const s = "tree";

const frequencySort = function  (s) {
    const freq = new Map();

    // Count frequncy
    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    // sorted in descending order the frequency hashmap into an array
    const sortedEntries = [...freq.entries()].sort((a, b) => b[1] - a[1]);

    let result = "";
    // store the elements with their count in descending order
    for (const [char, count] of sortedEntries) {
        result += char.repeat(count);
    }

    return result;
}
// Time complexity - O(n log n) , sorting
// Space complexity - O(n), n = no.of elements

const frequencySort1 = function  (s) {
    const freq = new Map();

    // count frequency
    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    // array as frequncy counter with i represting the frequncy
    const freqArr = Array.from({length: s.length + 1}, () => []);

    // push characters according to their frequncy
    for (const [char, count] of freq) {
        freqArr[count].push(char);
    }

    let result = "";
    //store the elements with frequncy from higher to lower
    for (let i = freqArr.length - 1; i > 0; i--) {
        if(freqArr[i].length > 0) {
            for (const char of freqArr[i]) {
                result += char.repeat(i);
            }
        }
    }

    return result;
}
// Time complexity - O(n), n - s.length. 
// At max an element can cover the enitre string s
// Space complexity - O(n), hashmap stores the all unique characters of string s

console.log(frequencySort(s));
console.log(frequencySort1(s));
