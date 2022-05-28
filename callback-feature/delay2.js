
function getDelay(delay) {
    let myPromise = new Promise(function (myResolve, myReject) {
        if (delay > 0) {
            // return
            myResolve(setTimeout(function () {
                console.log(" setTimeoutcalled ", delay)
                return `my value = ${delay}`
            }, delay));
        } else {
            myReject('failed')
        }
    });
    myPromise.then(function (msg) {
        console.log(` promise value out = ${msg}`)
    }).catch((msg) => {
        console.log("catch error follow " + msg)

    })
};


async function execute() {
    console.log(await getDelay(2000));
    console.log(await getDelay(1000));
    console.log(await getDelay());
}

execute();


// let promiseDef = new Promise()
// let timeOut;
// async function getDelay(delay) {
//     setTimeout(await (function funName() {
//         console.log(`delay => ${delay}`)
//         const valueDelay = `my value = ${delay}`
//         return valueDelay;
//     }), delay)
// };
