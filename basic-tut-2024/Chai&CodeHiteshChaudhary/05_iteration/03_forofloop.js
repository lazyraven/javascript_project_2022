// for of

// ["", "", ""]
// [{}, {}, {}]

let arr = [1, 2,3,4,5,6];

for(const num of arr){
    // console.log(num);
}

let greetings = "Hello World!!";
for(const greet of greetings){
    if(greet== " "){
        // console.log("space  detected", greet);
        break;
        // continue;
    }
    // console.log("greet continue", greet);
}

// Map

// it'll render key-value pair and not taking duplicate records
// we can't iteration on Map check it into 04_forinloop file
const map = new Map();


map.set('IN', 'India');
map.set('USA', 'United State Kingdom');
map.set('FR', 'France');
map.set('IN', 'India');


console.log("map", map);

for(let record of map){
console.log("record", record);
}

for(let [key, value] of map){
    console.log(`${key} :- ${value}`);
}

for(let [key, value] of map){
    console.log(`${key} :- ${value}`);
}

// we can't use for of loop for simple object

const myObject = {
    'game1': 'Mario',
    'game2': "Super Surfer"
}

// for(let key of myObject){
// for(let [key, value] of myObject){
// console.log(key); // o/p throw error beacuse we tried to use for of loop for object for this one there is another loop forin
// }