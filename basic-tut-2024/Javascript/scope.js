// let with different scope
// * let creates a block scope
// * Re-declaration is not allowed(in same scope)
// * Re-assignment is allowed

{
  // block scope
  let x = 0;
  console.log(x);
  // let x= 1; // Error
}

{
  let x = 2;
  x = 3;
  console.log(x); //3
}

console.log(x); // Error in global scope

// var with different scopes

// * No blcok scope and can, be re-declared
// * Only had function scope
// * var are hoisted, so they can be used before the declaration

var x = 1;
var x = 2; // valid

console.log(y); //valid
var y = 3;

z = 4;
console.log(z); //valid
var z;

// const with different scope

// * const creates a block scope
// * Re-declaration is not allowed
// * Re-assignment is not allowed
// * Must be assigned at declaration time.

{
  // block scope
  // const a; //Error
  const b = 0;
  b = 3;
}
// console.log(a); // Error in global scope
