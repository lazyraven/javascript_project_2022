// please render mathematics table by for loop => Interview Question

// Important 

for(let i=1; i<=10; i++){
    // console.log(`Outer loop value i ${i}`);
    for(let j=1; j<=10; j++){
    // console.log(i + '*' + j + '=' + i*j);
    // console.log(`Inner loop value i ${j} and Inner loop ${i}`);
    }
}

// break continue;

// for(let index=1; index<=20; index++){
//     if(index == 5){
//         console.log("5 detected");
//         break;
//     }
//     console.log(`Value of i is ${index}`);
// }

for(let index=1; index<=20; index++){
    if(index == 5){
        console.log("5 detected");
        continue;
    }
    console.log(`Value of i is ${index}`);
}