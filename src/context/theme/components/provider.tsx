import { useState, useEffect, type ReactNode } from "react";
import { ThemeContext } from "./context";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });
  const isDark = theme === 'dark';

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (theme: 'light' | 'dark') => {
    const mainElement = document.querySelector('main');
    if (!mainElement) return;

    mainElement.classList.remove('light', 'dark');
    mainElement.classList.add(theme);
    
    if (theme === 'dark') {
      mainElement.classList.add('dark');
    } else {
      mainElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
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