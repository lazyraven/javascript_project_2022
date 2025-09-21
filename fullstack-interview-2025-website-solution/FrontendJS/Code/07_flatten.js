console.log(
  "------------------------- FLATTEN ARRAY RESULT ------------------------"
);
// flatten or you can use reduce method > https://chatgpt.com/c/68b47ed5-0e54-8322-828f-111a92f2bfe4
const arr = [1, [2, [3, 4]], 5];
// console.log("length", arr.length); // 3
// console.log("index 0", arr[0]); // 1
// console.log("index 1", arr[1]); //(2) => [0: 2, 1:[0: 3, 1: 4]],
// console.log("index 2", arr[2]); // 5

// flat(1) -> flattens 1 level
let result = arr.flat(1);
console.log("flatten result 1", result);

// flat(2) -> flattens 2 levels
result = arr.flat(2);
console.log("flatten result 2", result);

// flat(Infinity) -> flattens completely
result = arr.flat(Infinity);
console.log("flatten result 3", result);
