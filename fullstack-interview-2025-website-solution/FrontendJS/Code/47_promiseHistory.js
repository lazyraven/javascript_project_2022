const p1 = Promise.resolve(1);
const p2 = Promise.reject("fail");
const p3 = Promise.resolve(3);

// all — rejects immediately if ANY rejects
Promise.all([p1, p2, p3]).catch(e => console.log(e)); // "fail"

// allSettled — waits for ALL, returns status+value for each
Promise.allSettled([p1, p2, p3]).then(results => {
  // [{status:"fulfilled",value:1},{status:"rejected",reason:"fail"},...]
});

// race — resolves/rejects with FIRST settled promise
Promise.race([p1, p2]).then(v => console.log(v)); // 1

// any — resolves with FIRST fulfilled; rejects if ALL reject
Promise.any([p2, p3]).then(v => console.log(v));  // 3