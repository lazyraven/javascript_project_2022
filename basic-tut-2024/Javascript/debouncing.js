// debouncing
// js file

const inputElement = document.getElementById("fruits");

function printInputText(text) {
  console.log(text);
}

function debounce(fx, delay) {
  let timeoutId = null;
  return function (text) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fx(text);
    }, delay);
  };
}

const debounceFn = debounce(printInputText, 2000);

// inputElement.addEventListener("input", (event) => {
inputElement?.addEventListener("input", (event) => {
  debounceFn(event.target.value);
});
