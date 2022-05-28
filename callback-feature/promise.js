function getMultiplication(a, b, timer = 1000) {
    console.log(`getMultiplication timer => ${new Date()}`)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`timer => ${new Date()}`)
            resolve(a * b)
            // reject('some error occured.')
        }, timer)
    })
    // setTimeout(() => {
    //     return a * b;
    // })
}

async function execute() {
    try {
        Promise.all([
            getMultiplication(2000, 1, 2000),
            getMultiplication(3000, 1, 3000)
        ]).then((result) => {
            console.log(new Date())
            console.log(`res1 called`);
            console.log(result);
        })
        // const res1 = await getMultiplication(10, 20, 2000)
        // console.log(`res1 called`);
        // console.log(res1);
        // const res2 = await getMultiplication(10, 40, 3000)
        // console.log(`res1 called`);
        // console.log(res2);
    } catch (error) {
        console.log(`catch called`);
        console.log(error);
    }
    // getMultiplication(10, 40).then((res) => {
    //     console.log(`res called`);
    //     console.log(res);
    // }).catch((error) => {
    //     console.log(`catch called`);
    //     console.log(error);
    // });

}

execute();
