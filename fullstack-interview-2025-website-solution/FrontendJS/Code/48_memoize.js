function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    }
}

const fib = memoize((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
});

console.log(fib(40));  // Fast — results cached