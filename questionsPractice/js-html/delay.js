
function getDelay(delay) {
    setTimeout(() => {
        console.log(`delay => ${delay}`)
        return `my value = ${delay}`;
    }, delay)
};

async function execute() {
    console.log(await getDelay(2000));
    console.log(await getDelay(1000));
}

execute();

