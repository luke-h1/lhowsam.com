import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
const useDarkMode = () => {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
      setTheme('light');

      if (currentTheme === 'dark') {
        setTheme('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      // Theme is light mode
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };
  // const [icon, setIcon] = useState(false);
  // const handleIcon = () => setIcon(!icon);



  return (
    <>
      <div className="theme-switcher">
        <FiSun

          onClick={toggleTheme}
        />
       
      </div>
    </>
  );
};
export default useDarkMode;
