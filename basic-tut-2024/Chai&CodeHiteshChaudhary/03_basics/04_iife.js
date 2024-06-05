// Immediately Invoked Function Expressions (IIFE)
//why we use IIFE : global scope polution problem=> global scope level execution k behaviour ki wajh se IIFE use

// Important Note : please use semicolon (;) after function execution, either it'll throw error in the output

// Interview Question : write a code for two execution function by IIFE

function invokedFun(){
    console.log("basic function DB Connected called");
}
invokedFun();

(function invockedFunTwo(){
    console.log("invockedBasicFun--Two DB Connected called");
})();

(()=>{
    console.log("invockedArrowFun--Three  DB Connected called");
})();

((name)=>{
    console.log(`invockedArrowValueFun--Four  DB Connected called ${name}`);
})('Nisha');

