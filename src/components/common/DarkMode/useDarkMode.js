import { useEffect, useState } from 'react';
// import { FiSun, FiMoon } from 'react-icons/fi';

const useDarkMode = () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
      setTheme('light');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      setTheme('dark');
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);
  return [theme, toggleTheme];
};
export default useDarkMode;
