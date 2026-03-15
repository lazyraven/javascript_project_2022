function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const fn1 = outer();
const fn2 = outer();

fn1();
fn1();
fn2();

// Output:
// 1
// 2
// 1

// const fn2 = outer()
// outer() runs again, creating a new independent scope.

// So now we have two separate closures.
// fn1 → count
// fn2 → count
// These are different variables in memory.
// fn2 has its own count starting at 0, so it logs 1 when called.

// Each time a function like outer() runs, it creates a new closure with its own private variables.
// outer() → new lexical environment
// So :
// fn1 → count (independent)
// fn2 → count (independent)