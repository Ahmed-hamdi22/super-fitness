import { useState, useEffect, type ReactNode } from "react";
import { ThemeContext } from "./context";

export function ThemeProvider({ children }: { children: ReactNode }) {
  // States
  const [theme, setTheme] = useState<string>("light");
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const mainElement = document.querySelector('main');
    const isDarkMode = mainElement?.classList.contains('dark');
    setTheme(isDarkMode ? 'dark' : 'light');
    setIsDark(isDarkMode || false);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsDark(newTheme === 'dark');
    
    const mainElement = document.querySelector('main');
    if (mainElement) {
      if (newTheme === 'dark') {
        mainElement.classList.add('dark');
      } else {
        mainElement.classList.remove('dark');
      }
    }
    
    localStorage.setItem('theme', newTheme);
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