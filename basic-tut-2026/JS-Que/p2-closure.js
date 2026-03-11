// (Closures)

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}

// output :
// 3
// 3
// 3

// The key reasons are:
// var is function-scoped, not block-scoped.
// setTimeout runs after the loop finishes.

// Step 1 — Loop runs immediately
// The loop executes quickly:
// i = 0
// i = 1
// i = 2
// i = 3  ← loop stops
// Now the loop is finished and i becomes 3.

// Step 2 — setTimeout callbacks execute later
// All three callbacks run after 100ms.
// Each callback references the same variable i.
// i = 3 at this point, so all callbacks log 3.

// To fix this, we can use let instead of var, which is block-scoped:  
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);  
}
// Output:
// 0
// 1
// 2
// Because let creates a new block-scoped variable for each iteration.