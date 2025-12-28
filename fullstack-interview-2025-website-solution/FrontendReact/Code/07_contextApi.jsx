import React, { createContext, useState, useContext } from "react";

// Create Context
const ThemeContext = createContext();

// Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consuming Context
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
    Current Theme: {theme}
  </button>;
}

// App
function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
}

// Common Real-World Example
// Authentication

<AuthContext.Provider value={{ user, login, logout }}></AuthContext.Provider>
// Used across navbar, dashboard, protected routes.