import React, { Fragment, useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Darkmode = () => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      setTheme('light');

      if (currentTheme === 'dark') {
        setTheme('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }
  }, []);

  const setDarkMode = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Fragment>
      <div className="theme-switcher">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          name="checkbox"
          onClick={setDarkMode}
        />
        <label className="label" htmlFor="checkbox">
          <FaMoon className="fa fa-moon"></FaMoon>
          <FaSun className="fa fa-sun"></FaSun>
          <div className="ball"></div>
        </label>
      </div>
    </Fragment>
  );
};

export default Darkmode;
