for (var i = 0; i < 3; i++) {
    setTimeout((i) => {
        console.log(i);
    }, 100, i)
}
// Output:
// 0
// 1
// 2

// Any arguments after the delay are passed to the callback function.

// setTimeout has this signature:
// setTimeout(callback, delay, arg1, arg2, ...)

// So during each loop iteration:
// Loop iteration	Value passed to callback
// i = 0	callback receives 0
// i = 1	callback receives 1
// i = 2	callback receives 2

// Each callback receives its own copy of the value, not the shared i.

// In the previous example: p2-closure.js 
// console.log(i) // The callback looked up the outer variable.

// In this example:
// (i) => console.log(i) 
// The callback uses its own parameter, which is passed as an argument.
// So it no longer depends on the outer var i.