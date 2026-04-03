// leetcode - 242

const s = "aa", t = "bb";

const isAnagram = function  (s, t) {
    if (s.length !== t.length) return false;

    // frequnecy of elements(s + t);
    const freq = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i], charT = t[i];
        
        // if letters appear in s increment frequnecy and decrement if appears in t 
        freq.set(charS, (freq.get(charS) || 0) + 1);
        freq.set(charT, (freq.get(charT) || 0) - 1);
    }

    for (const value of freq.values()) {
        // value < 0 means their are no exact same characters or frequnecy
        // of characters
        if(value < 0) return false;
    }

    return true;
}
// Time complexity - O(n), n - length of the strings
// Space complexity - O(k), k - number of unique elements

const isAnagram1 = function  (s, t) {
    if (s.length !== t.length) return false;

    const freq = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        // frequnecy of each character in s
        freq[s.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < t.length; i++) {
        const index = t.charCodeAt(i) - 97;
        // Reduces frequnecy of s characters or if character is unique to t 
        // makes it -1 as base is 0;
        freq[index]--;

        // value < 0 means their are no exaxt same characters or frequnecy of 
        // characters
        if (freq[index] < 0) return false;
    }

    return true;
}
// Time complexity - O(n), n - length of the  strings
// Space complexity - O(1), constant space

console.log(isAnagram(s, t));
console.log(isAnagram1(s, t));
