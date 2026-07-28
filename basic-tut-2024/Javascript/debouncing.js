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
      document.getElementById("result").innerHTML = 'Debounce Result: ' + text;
      document.getElementById("result").style.color = "green";
      fx(text);
    }, delay);
  };
}

const debounceFn = debounce(printInputText, 2000);

inputElement?.addEventListener("input", (event) => {
  // console.log(" event triggered",event.target.value);
  debounceFn(event.target.value);
  console.log(" event triggered",event.target.value);
});
