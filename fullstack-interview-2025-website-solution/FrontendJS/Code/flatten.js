console.log(
  "------------------------- FLATTEN ARRAY RESULT ------------------------"
);

const arr = [1, [2, [3, 4]], 5];

// flat(1) -> flattens 1 level
let result = arr.flat(1);
console.log("flatten result 1", result);

// flat(2) -> flattens 2 levels
result = arr.flat(2);
console.log("flatten result 2", result);

// flat(Infinity) -> flattens completely
result = arr.flat(Infinity);
console.log("flatten result 3", result);
