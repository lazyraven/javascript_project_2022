// Check if Two Arrays Have Same Frequency
// [1,2,2]
// [2,1,2]
// output : true

function sameFrequency(arr1, arr2) {
    // Edge Case 1: Different lengths
    if (arr1.length !== arr2.length) {
        return false;
    }

    const freq1 = {};
    const freq2 = {};

    // Count frequency in arr1
    for (const num of arr1) {
        freq1[num] = (freq1[num] || 0) + 1;
    }

    // Count frequency in arr2
    for (const num of arr2) {
        freq2[num] = (freq2[num] || 0) + 1;
    }

    // Compare frequencies
    for (const key in freq1) {
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }

    return true;
}

console.log(sameFrequency([1, 2, 2], [2, 1, 2])); // true
console.log(sameFrequency([], [])) // true
console.log(sameFrequency([-1, -1, 2], [2, -1, -1])) // true
console.log(sameFrequency([1, 2], ["1", "2"]))

// This is tricky because object keys become strings internally.
// To properly handle this, use Map.


// Best Interview-Friendly Version (Using Map)

// Map handles:

// numbers
// strings
// booleans
// objects
// type safety

function sameFrequency(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const map = new Map();

    for (const item of arr1) {
        map.set(item, (map.get(item) || 0) + 1);
    }

    for (const item of arr2) {
        if (!map.has(item)) {
            return false;
        }

        map.set(item, map.get(item) - 1);

        if (map.get(item) < 0) {
            return false;
        }
    }

    return true;
}

console.log(sameFrequency([1, 2, 2], [2, 1, 2])); // true

// Time Complexity
// Building frequency: O(n)
// Comparing: O(n)

// Overall:

// O(n)

// Efficient solution for interviews.