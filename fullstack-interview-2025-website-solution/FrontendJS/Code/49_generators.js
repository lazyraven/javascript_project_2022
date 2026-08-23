function* idGenerator() {
    let id = 1;
    while (true) yield id++; // infinte, but lazy
}

const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

// Range generator
function* range(start, end, step = 1) {
     for (let i = start; i < end; i += step) yield i;
}

console.log([...range(0, 10, 2)]);