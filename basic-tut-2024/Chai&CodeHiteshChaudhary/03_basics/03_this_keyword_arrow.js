// this keyword => define is current context

const userList = {
    username:"Nisha",
    count: 23,
    welcomeMessage(){
        console.log(`${this.username} , welcome to website`);
        console.log("inside this", this);
        this.username = "Yadav"
        console.log(`${this.username} , welcome to website`);
        console.log("inside 2 this", this);

    }
}

userList.welcomeMessage();
console.log("outside this", this);
userList.username = "sam"
console.log("outside 2 this", this);
console.log("outside username", userList.username);

function chai(){
    let username = "nisha-yadav"
    console.log(this.username,username);
}
chai()

basicFun();
function basicFun(){
    console.log("basicFun called", this);
}

const expressionFun = ()=> {
    console.log("expressionFun called", this);
}
expressionFun();

const arrowFun = (value) => {
    let username = "arrowFunction Value"
    console.log("arrowFun called", this.username);
    console.log("arrowFun called this", this);
}
arrowFun();


// const addTwo = (num1, num2)=>{
//     return num1+num2;
// }

const addTwo = (num1, num2)=> (num1+ num2);
// const userObj = (num1, num2)=> {username:"Nisha"}; // wrong -> object need to add into the parantheses;
const userObj = (num1, num2)=> ({username:"Nisha"}); // right 


console.log(addTwo(3, 5));
console.log(userObj());

