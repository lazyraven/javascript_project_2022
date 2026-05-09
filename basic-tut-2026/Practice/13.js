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