var c = 300
let a = 100
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    // console.log("INNER C: ", c);
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
// Important

// Basic Function
console.log(addone(5)) // valid

function addone(num){
    return num + 1
}


// Expression 

addTwo(5); // we can't initialize function before declaration // not valid before function create, please call that function after the declaration o/p => it'll throw error 
// it is hoisting type example
const addTwo = function(num){
    return num + 2
}