// ✔ Practical JavaScript Demo
// 1. localStorage Example // 💡 Use this for: preferences, cart items, long-term data.
// Save data
localStorage.setItem("theme", "dark");

// Read data
const theme = localStorage.getItem("theme");
console.log("Theme:", theme);

// Remove a key
localStorage.removeItem("theme");

// Clear all
localStorage.clear();

// 2. sessionStorage Example : Use this for: data that should disappear when the tab closes.
sessionStorage.setItem("tempMessage", "Hello Nisha!"); // Read data
const msg = sessionStorage.getItem("tempMessage");
console.log("Message:", msg);

// Remove
sessionStorage.removeItem("tempMessage");

// Clear all
sessionStorage.clear();

// 3. Cookie Example :

// Set a cookie (expires in 7 days)
document.cookie = "username=Nisha; max-age=" + 7 * 24 * 60 * 60;

// Read cookies
console.log(document.cookie);

// Delete cookie (set max-age to 0) : Use this for: authentication tokens, server-side readable data.
document.cookie = "username=; max-age=0";
