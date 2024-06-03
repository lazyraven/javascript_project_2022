//Definition : A callback function is a function passed into another function as an argument, which is called inside the outerFunction.

//callback function
const greet = (name)=> {console.log('Hi '+ name)}

//function
const callMe = (callback)=>{
let name = prompt('Enter your name');
callback(name);
}

//passing function as parameter
callMe(greet);