function isEven(num) {
    let result = num % 2;
    console.log("result", result)
    if (result == 0) {
        console.log("true");
        return true
    } else {
        console.log("false");
        return false
    }
}
isEven(2)
isEven(3)