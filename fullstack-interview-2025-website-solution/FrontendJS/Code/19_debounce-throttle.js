console.log(
  "------------------------- DEBOUNCE-THROTTLE RESULT ------------------------"
);

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Example usage:
const handleSearch = debounce((text) => {
  console.log("Searching for:", text);
}, 500);

handleSearch("debounce", "a");
handleSearch("debounce", "ab");
handleSearch("debounce", "abc");
// Only "abc" will run after 500ms of no more calls

// Explanation :
// Here I created a debounce function that waits until the user stops typing for 500ms before running
// the search, so unnecessary calls are avoided.

// Throttle Example
function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Example usage:
const handleScroll = throttle(() => {
  console.log("Scroll event triggered");
}, 1000);

// If user keeps scrolling, this runs once every 1s
