// First non-repeating character
// Given a string s, find the first character that appears exactly once and return its index. If none exist, return -1. (LeetCode #387)

// INPUT: s = "leetcode"
// OUTPUT: 0  // 'l' appears once
// INPUT: s = "loveleetcode"
// OUTPUT:  2  // 'v'
// INPUT: s = "aabb"
// OUTPUT: -1

function firstNonRepChar(str) {
    // const freq = new Map()
    const freq = {}
    for (const char of str) {
        // freq.set(char, (freq.get(char) || 0) + 1);
        freq[char] = (freq[char] || 0) + 1;
    }
    // console.log("f   req", freq);

    for (let i = 0; i < str.length; i++) {
    console.log("freq", freq[str[i]]);

        if (freq[str[i]] === 1) return i;
    }
    return -1;
    // console.log("result", result);
}
console.log(firstNonRepChar("leetcode"));
console.log(firstNonRepChar("loveleetcode"));
console.log(firstNonRepChar("aabb"));

