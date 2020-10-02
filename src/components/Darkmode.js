import React, { Fragment, useEffect } from 'react';
import {FaMoon,FaSun} from 'react-icons/fa'


const Darkmode = () => {
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }
  }, []);

  const onClick = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else if (!e.target.checked) {
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
          onClick={onClick}
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
