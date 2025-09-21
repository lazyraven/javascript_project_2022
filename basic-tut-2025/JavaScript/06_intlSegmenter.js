console.log("Intl.Segmenter in JavaScript");

// example of  word granularity: "word"
console.log("RESULT 1  ------------------------------- RESULT 1");
const segmenter = new Intl.Segmenter("en", { granularity: "word" });
const input = "Hello World!";
const segments = segmenter.segment(input);
for (const item of segments) {
  console.log(item);
}

// result in array form example of  granularity: "sentence"
console.log("RESULT 2  ------------------------------- RESULT 2");
const segmenter2 = new Intl.Segmenter("en", { granularity: "sentence" });
const text = "Hello world. How are you?";
console.log("segmenter2.segment(text)", [...segmenter2.segment(text)]);

console.log("RESULT 3  ------------------------------- RESULT 3");
const segmenter5 = new Intl.Segmenter("en", { granularity: "word" });
const text3 = "Hello, world! This is an example of Intl.Segmenter.";
const segments5 = segmenter5.segment(text3);
for (const segment of segments5) {
  console.log(segment);
  console.log(segment.segment);
}

// Practice some cases
console.log(
  "------------------------------- Practice Some Cases  -------------------------------"
);

// Example usage of Intl.Segmenter
// const segmenter1 = new Intl.Segmenter("en", { granularity: "sentence" });
console.log("RESULT 4  ------------------------------- RESULT 4");
const segmenter1 = new Intl.Segmenter("en", { granularity: "word" });
const text1 = "Hello, world! This is an example of Intl.Segmenter.";
const segments1 = segmenter1.segment(text1);
for (const segment of segments1) {
  console.log(segment);
  console.log(segment.segment);
}

console.log("RESULT 5  ------------------------------- RESULT 5");
const segmenter3 = new Intl.Segmenter("en", { granularity: "word" });
// const segmenter = new Intl.Segmenter("en", { granularity: "sentence" });

// const input = "Hello World!";
const input1 = "Hello world. How are you?";
// console.log("segmenter.segment(text)", [...segmenter.segment(input)]);

const segments3 = segmenter.segment(input1);
for (const item of segments3) {
  console.log(item);
}

// result in array form

console.log("RESULT 6 ------------------------------- RESULT 6");
const segmenter4 = new Intl.Segmenter("en", { granularity: "sentence" });
const text2 = "Hello world. How are you?";
console.log("segmenter2.segment(text)", [...segmenter2.segment(text2)]);
