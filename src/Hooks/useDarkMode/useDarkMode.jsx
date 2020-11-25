import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    theme && setTheme(theme);
    // eslint-disable-next-line
  }, []);
  return [theme, setTheme];
};
