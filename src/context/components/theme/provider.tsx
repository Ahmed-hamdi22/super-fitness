import { useState, useEffect, type ReactNode } from "react";
import { ThemeContext } from "./context";

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize theme state with localStorage or default to light
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });

  // Derived state for isDark
  const isDark = theme === 'dark';

  // Apply theme on initial load and when theme changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (theme: 'light' | 'dark') => {
    const mainElement = document.querySelector('main');
    if (!mainElement) return;

    // Clean up previous theme classes
    mainElement.classList.remove('light', 'dark');
    
    // Apply new theme
    mainElement.classList.add(theme);
    
    // For Tailwind dark mode
    if (theme === 'dark') {
      mainElement.classList.add('dark');
    } else {
      mainElement.classList.remove('dark');
    }
    
    // Persist to localStorage
    localStorage.setItem('theme', theme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme); // This will trigger the useEffect
  };

  const value = {
    theme,
    toggleTheme,
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}