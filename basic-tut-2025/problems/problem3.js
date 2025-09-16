const problems = [
  {
    id: "p1",
    step: 1,
    stepType: "Fundamentals (Warmup)",
    title: "Print all elements of an array",
    test: "Input: [1,2,3,4] → Output: 1 2 3 4",
  },
  {
    id: "p2",
    step: 1,
    stepType: "Fundamentals (Warmup)",
    title: "Find minimum and maximum in an array",
    test: "Input: [5,3,9,1,6] → Min=1, Max=9",
  },
  {
    id: "p3",
    step: 1,
    stepType: "Fundamentals (Warmup)",
    title: "Find sum and average",
    test: "Input: [2,4,6,8] → Sum=20, Avg=5",
  },
  {
    id: "p4",
    step: 1,
    stepType: "Fundamentals (Warmup)",
    title: "Reverse an array (with extra array)",
    test: "Input: [1,2,3,4] → [4,3,2,1]",
  },
  {
    id: "p5",
    step: 1,
    stepType: "Fundamentals (Warmup)",
    title: "Reverse an array (in-place)",
    test: "Input: [10,20,30] → [30,20,10]",
  },
  {
    id: "p6",
    step: 1,
    stepType: "Fundamentals (Warmup)",
    title: "Count appearances of target",
    test: "Input: [1,2,2,3,2,4], Target=2 → 3",
  },

  {
    id: "p7",
    step: 2,
    stepType: "Searching & Tracking",
    title: "Linear search (index of target)",
    test: "Input: [5,7,9,11], Target=9 → Index=2",
  },
  {
    id: "p8",
    step: 2,
    stepType: "Searching & Tracking",
    title: "Check if array is sorted",
    test: "Input: [1,2,3,4] → true",
  },
  {
    id: "p9",
    step: 2,
    stepType: "Searching & Tracking",
    title: "Find second largest element",
    test: "Input: [10,5,20,8] → 10",
  },
  {
    id: "p10",
    step: 2,
    stepType: "Searching & Tracking",
    title: "Track running min & max",
    test: "Input: [7,2,5,10,1] → Min=1, Max=10",
  },

  {
    id: "p11",
    step: 3,
    stepType: "Hash Map & Set Practice",
    title: "Check duplicates (set)",
    test: "Input: [1,2,3,1] → true",
  },
  {
    id: "p12",
    step: 3,
    stepType: "Hash Map & Set Practice",
    title: "Count frequency of each element",
    test: "Input: [1,2,2,3,1,4] → {1:2,2:2,3:1,4:1}",
  },
  {
    id: "p13",
    step: 3,
    stepType: "Hash Map & Set Practice",
    title: "First non-repeating element",
    test: "Input: [2,3,4,2,3,5] → 4",
  },
  {
    id: "p14",
    step: 3,
    stepType: "Hash Map & Set Practice",
    title: "Intersection of two arrays",
    test: "Input: [1,2,2,1],[2,2] → [2,2]",
  },

  {
    id: "p15",
    step: 4,
    stepType: "Core Interview Problems",
    title: "Two Sum",
    test: "Input: nums=[2,7,11,15],target=9 → [0,1]",
  },
  {
    id: "p16",
    tep: 4,
    stepType: "Core Interview Problems",
    title: "Best Time to Buy & Sell Stock",
    test: "Input: [7,1,5,3,6,4] → 5",
  },
  {
    id: "p17",
    tep: 4,
    stepType: "Core Interview Problems",
    title: "Contains Duplicate",
    test: "Input:[1,2,3,4]→false; [1,2,3,1]→true",
  },

  {
    id: "p18",
    step: 5,
    stepType: "Stretch / Advanced Practice",
    title: "Move zeros to end",
    test: "Input: [0,1,0,3,12] → [1,3,12,0,0]",
  },
  {
    id: "p19",
    step: 5,
    stepType: "Stretch / Advanced Practice",
    title: "Rotate array (k steps)",
    test: "Input: [1,2,3,4,5,6,7],k=3 → [5,6,7,1,2,3,4]",
  },
  {
    id: "p20",
    step: 5,
    stepType: "Stretch / Advanced Practice",
    title: "Maximum subarray (Kadane's)",
    test: "Input: [-2,1,-3,4,-1,2,1,-5,4] → 6",
  },
  {
    id: "p21",
    step: 5,
    stepType: "Stretch / Advanced Practice",
    title: "Find missing number (1..n)",
    test: "Input: [3,0,1] → 2",
  },
  {
    id: "p22",
    step: 5,
    stepType: "Stretch / Advanced Practice",
    title: "Majority element (> n/2)",
    test: "Input: [3,2,3] → 3",
  },
];

const nestedArr = [1, [[3, 2], 4], 6];

let result = [...nestedArr];
console.log("result", result);

const flatArr = result.flat(Infinity);
console.log("result2", result);

console.log("flatArr", flatArr);

// Count appearances of target
// Test: Input: [1,2,2,3,2,4], Target=2 → 3

const test6 = [1, 2, 2, 3, 2, 4];

// other way I resolved there is only one value duplicate > the answer will be different
function count_appearances_of_target(input) {
  let value = [];
  let duplicateValue = [];
  for (let i = 0; i < input.length; i++) {
    if (!value.includes(input[i])) {
      value.push(input[i]);
    } else {
      console.log("duplicate target input[i]", input[i]);
      duplicateValue.push(input[i]);
    }
  }
  console.log(
    "duplicateValue target",
    duplicateValue,
    duplicateValue.length + 1
  );
  console.log("value", value);
}

console.log(count_appearances_of_target(test6));

// practice
let ab1 = [2, 4];
let ab2 = [4, 2];
ab1[0] = ab2[0];

console.log(ab1); // [4,4]
console.log(ab2); // [4,2]

//  Check if array is sorted
// Test: Input: [1,2,3,4] → true

// Nisha's method
const test8 = [1, 2, 3, 4];

function check_if_array_is_sorted(input) {
  let result = false;
  for (let i = 0; i < input.length; i++) {
    if (input[i] < input[i + 1] || input[input.length - 1] == input[i]) {
      console.log("if true", input[i]);
      result = true;
    } else {
      console.log("failed   ", input[i]);
      return false;
    }
  }
  return result;
}

console.log("check_if_array_is_sorted", check_if_array_is_sorted(test8));

let arrVal = [-3, -1, -7, 5];
const test1234 = arrVal.sort((a, b) => a - b);

console.log("test1234", test1234);
