// Next Greater Element
// Test: Input: [2,1,2,4,3] → Output: [4,2,4,-1,-1]

let input = [2, 1, 2, 4, 3]
function next_greater_element(arr) {
    let stack = [];
    let result = new Array(arr.length);

    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        result[i] = stack.length ? stack[stack.length - 1] : -1
        stack.push(arr[i])
    }
    return result;
}
console.log(next_greater_element(input));
  