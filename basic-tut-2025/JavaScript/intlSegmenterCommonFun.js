console.log(
  "------------------ DEFINE COMMON FUNCTION -🔧 Universal Segmenter Utility------------------------",
  "https://chatgpt.com/c/68adec6b-4ad8-8330-819a-490159ce40c3"
);
function segmentInput(input, options = {}) {
  // If input is a number → segment as digits/chunks
  if (typeof input === "number") {
    const str = input.toString();
    const size = options.size || 1; // default = split into single digits
    let result = [];
    for (let i = 0; i < str.length; i += size) {
      result.push(str.slice(i, i + size));
    }
    return result.map(Number);
  }

  // If input is a string → use Intl.Segmenter
  if (typeof input === "string") {
    const granularity = options.granularity || "word"; // default = word
    const segmenter = new Intl.Segmenter(options.locale || "en", {
      granularity,
    });
    return [...segmenter.segment(input)];
  }

  throw new Error("Input must be a number or a string.");
}

console.log("✅ Example Usage");
console.log("1. Segment a number");
console.log(segmentInput(123456, { size: 2 }));
// [12, 34, 56]

console.log(segmentInput(98765));
// [9, 8, 7, 6, 5]

console.log("2. Segment text into words");
console.log(segmentInput("Hello world!", { granularity: "word" }));
/*
[
  { segment: 'Hello', index: 0, isWordLike: true },
  { segment: ' ', index: 5, isWordLike: false },
  { segment: 'world', index: 6, isWordLike: true },
  { segment: '!', index: 11, isWordLike: false }
]
*/

console.log("3. Segment text into characters");

console.log(segmentInput("👩‍💻 Hi", { granularity: "grapheme" }));
/*
[
  { segment: '👩‍💻', index: 0, isWordLike: true },
  { segment: ' ', index: 5, isWordLike: false },
  { segment: 'H', index: 6, isWordLike: true },
  { segment: 'i', index: 7, isWordLike: true }
]
*/
