import React, { createContext, useContext, useEffect, useState } from 'react'

// Create a context to manage the theme state globally
const ThemeContext = createContext();

// Custom hook to access the ThemeContext from any component
export const useTheme = () => useContext(ThemeContext);

// Initialize the theme state with the value from localStorage or default to 'light'
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    );

    // Update the body attribute and localStorage whenever the theme changes
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Function to toggle between 'light' and 'dark' theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Provide the theme state and toggle function to all child components
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};


