// throttling
let count = 0;

function printScroll() {
  count += 1;
  console.log("scroll called", count);
}

function throttle(fx, delay) {
  let timeoutId = null;
  return function () {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        fx();
        clearTimeout(timeoutId);
        timeoutId = null;
      }, delay);
    }
  };
}

const throttleFn = throttle(printScroll, 2000);

document.addEventListener("scroll", (e) => {
  throttleFn();
});
