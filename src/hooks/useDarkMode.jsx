import { useEffect, useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useDarkTheme = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      if (window) {
        window.localStorage.setItem('theme', 'dark');
      }
      setTheme('dark');
    } else {
      if (window) {
        window.localStorage.setItem('theme', 'light');
      }
      setTheme('light');
    }
  };
  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem('theme');
    // eslint-disable-next-line no-unused-expressions
    localStorageTheme && setTheme(localStorageTheme);
  }, [theme]);
  return [theme, toggleTheme];
};
