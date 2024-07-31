
function factorialize(num) {
    var myNum = 1;
    for (i = 1; i <= num; i++) {
        myNum = myNum * i;
    }
    console.log("myNum", myNum);
    return myNum;
}
console.log(factorialize(5));