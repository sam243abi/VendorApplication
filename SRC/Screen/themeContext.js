import React, { createContext, useState, useContext } from 'react';

// Create Theme Context
const ThemeContext = createContext();

// Light and Dark Theme Configurations
const lightTheme = {
  background: '#FFFFFF',
  text: '#000000',
  buttonBackground: '#007BFF',
  buttonText: '#FFFFFF',
};

const darkTheme = {
  background: '#121212',
  text: '#FFFFFF',
  buttonBackground: '#1E88E5',
  buttonText: '#000000',
};

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook to Use Theme
export const useTheme = () => useContext(ThemeContext);
