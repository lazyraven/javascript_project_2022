// (Very Tricky this)
const obj = {
  name: "JS",
  say() {
    console.log(this.name);
  }
};

const fn = obj.say;

fn();
obj.say();

// output -
// undefined
// JS

// Step-by-Step Explanation 
// 1️⃣ Object Method
// obj.say(); //Here the function is called as a method of obj.
// so this → obj
// therefore console.log(this.name) → "JS"

// 2️⃣ Function Assigned to Variable
// const fn = obj.say;
// fn();
// Now the function is no longer called from the object.
// It becomes a normal function call.
// so
// this → global object (or undefined in strict mode)
// this.name → undefined

// Important Rule for Interviews
// this depends on how a function is called, not where it was defined.

// Call Type	this
// obj.say()	obj
// fn()	global / undefined
// new Fn()	new object
// arrow function	lexical this