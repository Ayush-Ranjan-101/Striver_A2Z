// leetcode - 14

const strs = ["flower","flow","flight"];

const longestCommonPrefix = function  (strs) {
    // maxPrefixCount - 201 as the max length of a string is 200
    let prefixCount = -1, maxPrefixCount = 201;
    let word1 = strs[0];

    for (let i = 1; i < strs.length; i++) {
        const word2 = strs[i];

        // if "" or first letter does not match, largest prefix - ""
        if (word2 === "" || word1[0] !== word2[0]) return "";

        // maintaining the count till largest common prefix
        let j = 0;
        while (j < word1.length && j < word2.length && word1[j] === word2[j]) {
            prefixCount++;
            j++;
        }
        maxPrefixCount = Math.min(prefixCount, maxPrefixCount);
        prefixCount = -1;
    }

    return word1.substring(0,maxPrefixCount + 1);
}
// Time complexity - O(S), S - sum of all characters in all string
// Space complexity - O(1)

const longestCommonPrefix1 = function  (strs) {
    if (strs.length === 0) return "";

    let commonPrefix = "";
    // Sorting will place the most different elements at first and last place
    strs.sort();
    const first = strs[0], last = strs[strs.length - 1];

    for (let i = 0; i < Math.min(first.length, last.length); i++) {
        if (first[i] !== last[i]) break;
        commonPrefix += first[i];
    }

    return commonPrefix;
}
// Time complexity - O(N*logN + M), N*logN - sorting and M - minimum length of string 
// Space complexity - O(1)

console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix1(strs));
