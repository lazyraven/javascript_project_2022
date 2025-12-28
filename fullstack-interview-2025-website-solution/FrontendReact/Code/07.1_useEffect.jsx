// Basic Syntax (Must Know)

import { useEffect } from "react";

useEffect(()=>{
  // side effect
  return () => {
    // cleanup (optional)
  };
},[dependencies])


// Dependency Array (Very Important)
// 1. No dependency array
useEffect(() => {
  console.log("Runs after every render");
});
// ➡ Runs after every render


// 2. Empty dependency array []
useEffect(() => {
  fetchData();
}, []);
// ➡ Runs once on mount

// 3. With dependencies
useEffect(() => {
  fetchData(userId);
}, [userId]);
// ➡ Runs when userId changes


// Cleanup Function (Interview Favorite)
// “useEffect can return a cleanup function to avoid memory leaks.”
useEffect(() => {
  const timer = setInterval(() => {}, 1000);

  return () => clearInterval(timer);
}, []);

// Common Mistakes (Good to Mention)
// Correct async pattern:
useEffect(() => {
  const fetchData = async () => {
    const res = await apiCall();
  };
  fetchData();
}, []);