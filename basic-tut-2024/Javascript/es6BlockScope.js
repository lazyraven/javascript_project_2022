// let & const (Block scope)
                    function example() {
                    let x = 10;
                    if (true) {
                        let x = 20;
                        console.log(x); // 20
                    }
                    console.log(x); // 10
                    }

                    example(); // 10

// const PI = 3.14;
// PI = 3.1415; // ❌ Error: Assignment to constant


// 2. Arrow Functions 
                    const add = (a, b) => a + b;
                    console.log(add(2, 3)); // 5

                    const pets = ["dog","cat"];
                    const upper = pets.map(pet => pet.toUpperCase());
                    console.log(upper); // ["DOG","CAT"]

                    // EX: 2
                    const squareArrow = (x) => x * x;
                    console.log(squareArrow(5));
                    
// 3. Template Literals : 
                    const name = "Alice", age = 30;
                    const msg = `Hello, ${name}! You are ${age} years old.
                    Nice to meet you!`;
                    console.log(msg); // Hello, Alice! You are 30 years old.
                    // Multiline strings and expressions in strings

// 4. Destructuring : 
            // Object
                    const person = {firstName:"Alice", lastName:"Smith", userAge:25};
                    const {firstName, userAge} = person;
                    console.log(firstName, userAge); // Alice 25
            //   Array
                    const numbers = [1,2,3,4];
                    const [first, , third, ...rest] = numbers;
                    console.log(first, third, rest); // 1 3 [4]
                

// 5. Default Parameters : Useful to reduce undefined checks 
           
                function greet(name = "Guest") {
                    console.log(`Hello, ${name}!`);
                    }
                    greet();       // Guest
                    greet("Bob");  // Bob
            
// 6. Spread & Rest Operators : Rest collects arguments; spread expands arrays or objects
           
                function sum(...nums) {
                return nums.reduce((a,b) => a + b, 0);
                }
                console.log(sum(1,2,3,4)); // 10

                const arr1 = [1,2], arr2 = [3,4];
                const merged = [...arr1, ...arr2];
                console.log(merged); // [1,2,3,4]
            
            
// 7. Classes : ES6 syntax for OOP-style classes building on prototypes.
           
                class Person {
                constructor(name) {
                    this.name = name;
                }
                greet() {
                    console.log(`Hello, ${this.name}`);
                }
                }

                const p = new Person("Sam");
                p.greet(); // Hello, Sam
            
// 8. Promises : Simplifies async flows and error handling vs. callback hell.
           
                fetch('/api/data')
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.error(err));
            
// 9. Modules (import / export) : Encourages modular, maintainable code.
           
                // math.js
                // export function add(a, b) {
                // return a + b;
                // }

                // main.js
                // import { add } from './math.js';
                // console.log(add(2,3)); // 5
            
// 10. for…of Loop : Iterates directly over iterable items
           
                const petsList = ["dog","cat","fish"];
            for (const pet of petsList) {
            console.log(pet);
            }
            