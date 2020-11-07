import React, { useEffect, useState } from 'react';
import lightSvg from '../../../Images/svg/sun.svg';
import darkSvg from '../../../Images/svg/moon.svg';

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

  const [icon, setIcon] = useState(true);
  const handleIcon = () => setIcon(!icon);

  const Icon = () => { 
    let icon;
    if (theme === 'light'){
      icon = 
    }
  }


  return (
    <>
      <div className="theme-switcher">
        {icon ? <FiSun onClick={toggleTheme} /> : <FiMoon onClick={toggleTheme} className='test'/> }
      </div>
    </>
  );
};
export default useDarkMode;

