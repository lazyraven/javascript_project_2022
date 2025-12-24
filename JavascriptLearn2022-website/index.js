
// Understand Execution context or call stack
var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);
console.log(square2, square4);

//Understand Variable & function -> 
var x = 1;
a();
b();
console.log(x);
function a() {
    var x = 10;
    console.log(x);
}
function b() {
    var x = 100;
    console.log(x);
}

//Understand local, global scope/space
/* global variable which was not define the inside the function */
var c = 10;

function d() {
    /* local variable define > inside the function*/
    var y = 100;
}
console.log(window.c);
console.log(c);
//  console.log(y);
console.log(this.c);

//Understand undefined & not defined
console.log("number", number);
var number = 2;
// console.log(z);
var undefinedTest1;
console.log(undefinedTest1);
// undefinedTest1 = 5;
if (undefinedTest1 === undefined) {
    console.log("undefinedTest1 is undefined");
} else {
    console.log("undefinedTest1 is not define");
}

var test1;
console.log(test1);
test1 = 20;
console.log(test1);
test1 = "Hello World !!"
console.log(test1);

//Understand scope chain & lexical environment
function scope() {
    console.log("scopeVar", scopeVar);
    /*  var scopeVar = 40; */
    scopeOne();
    function scopeOne() {
        console.log("scopeVar", scopeVar);
    }
}
var scopeVar = 40;
scope();

//Understand let, const &  temporal dead zone (ReferenceError, SyntaxError & TypeError)

// console.log(letVar);
// console.log(constVar);
// console.log(defineVal);

let letVar = 20;
const constVar = 40;

// notHoisted(); // TypeError: notHoisted is not a function

// var notHoisted = function () {
//     console.log('bar');
// }

//Understand let, const depply -> define in brackets/block

var a1 = 100;
let b1 = 200;
{
    var a1 = 10;
    let b1 = 20;
    const c1 = 30;
    console.log(a1);
    console.log(b1);
    console.log(c1);
}
console.log(a1);
console.log(b1);
// console.log(c1);

//Understand  Closure
/*Example1*/
function closure() {
    var closureVar = 7;
    function clouser1() {
        console.log(closureVar);
    }
    clouser1();
}
closure();
/*Example2*/
function closure2() {
    // var closureVar1 =  function clouser3(){
    //     console.log(closureVar1);
    // }
    // clouser3();
}
closure2();

/*Example3*/
function closure3() {
    // var closureVar2 =  function clouserInner4(){
    //     console.log(closureVar2);
    // }
    // clouserInner4();
}
closure3();

/*Example4*/
function closure4() {
    var closureVar3 = 7;
    clouserInner5();
}
// closure4( function clouserInner5(){
//     console.log(closureVar3);
// });

/*Example5*/
function closure5() {
    var closureVar4 = 7;
    function clouserInner6() {
        console.log('closureVar4', closureVar4);
    }
    return clouserInner6;
}
closure5();


// const timer = document.querySelector('#time span');
// setInterval(() => {
//     timer.innertext = new Date().toLocalString()
// }, 1000)
/*Example6*/
function closure6() {
    var closureVar5 = 7;
    return function clouserInner7() {
        console.log('closureVar4', closureVar5);
    }
    //     function clouserInner7() {
    //         console.log('closureVar4', closureVar5);
    //     }
    //    return clouserInner7;
}
var closureVal = closure6();
console.log('closureVal', closureVal);
closureVal();