import { useState } from 'react';

export const useDarkTheme = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const toggleTheme = () => {
    if (useDarkTheme === 'light') {
      if (window) {
        window.localStorage.setItem('theme', 'dark');
      }
      setUseDarkTheme(true);
    } else {
      if (window) {
        window.localStorage.setItem('theme', 'light');
      }
      setUseDarkTheme(false);
    }
  };
  return [useDarkTheme, toggleTheme];
};
