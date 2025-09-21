// 1️⃣ Debounce utility function
function debounce(func, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 2️⃣ Logic to run after typing stops
function handleSearch(event) {
  const value = event.target.value.trim();
  const result = document.getElementById("result");
  result.textContent = value ? `Searching for: "${value}"` : "Type to search…";
  console.log("Search triggered:", value);
}

// 3️⃣ Wire it up to the input
const input = document.getElementById("search");
const debouncedInputHandler = debounce(handleSearch, 500);
input.addEventListener("input", debouncedInputHandler);

// 1. Button click handler
const btn = document.getElementById("btn");
const btnOutput = document.getElementById("btnOutput");
const handleClick = () => {
  btnOutput.textContent =
    "Button clicked at " + new Date().toLocaleTimeString();
};
const debouncedClick = debounce(handleClick, 1000);
btn.addEventListener("click", debouncedClick);

// 2a. Window resize
const resizeOut = document.getElementById("resizeOutput");
const handleResize = () => {
  resizeOut.textContent = `Resized: ${window.innerWidth}×${window.innerHeight}`;
};
window.addEventListener("resize", debounce(handleResize, 500));

// 2b. Window scroll
const scrollOut = document.getElementById("scrollOutput");
const handleScroll = () => {
  scrollOut.textContent = `Scrolled to ${window.scrollY}px`;
};
window.addEventListener("scroll", debounce(handleScroll, 300));

// 3. Form validation / auto-save
const formInput = document.getElementById("formInput");
const formOutput = document.getElementById("formOutput");
const validateAndSave = (e) => {
  const val = e.target.value.trim();
  if (!val) {
    formOutput.textContent = "Please enter a username";
    formInput.style.borderColor = "red";
  } else {
    formOutput.textContent = "Saving: " + val;
    formInput.style.borderColor = "#0a0";
    // simulate auto-save (e.g. send to backend)
  }
};
formInput.addEventListener("input", debounce(validateAndSave, 500));
