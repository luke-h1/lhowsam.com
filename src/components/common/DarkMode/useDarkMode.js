import { useEffect, useState } from 'react';
export const useDarkMode = () => {
  const [theme, setTheme] = useState('dark');
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
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
};

// import React, { useEffect, useState } from 'react';
// import { FiSun, FiMoon } from 'react-icons/fi';
// const useDarkMode = () => {
//   const [theme, setTheme] = useState('dark');
//   useEffect(() => {
//     const currentTheme = localStorage.getItem('theme');
//     if (currentTheme === 'light') {
//       setTheme('light');

//       if (currentTheme === 'dark') {
//         setTheme('dark');
//         document.documentElement.setAttribute('data-theme', 'dark');
//       }
//     }
//   }, []);

//   const toggleTheme = () => {
//     handleIcon();
//     if (theme === 'light') {
//       setTheme('dark');
//       document.documentElement.setAttribute('data-theme', 'dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       // Theme is light mode
//       setTheme('light');
//       document.documentElement.setAttribute('data-theme', 'light');
//       localStorage.setItem('theme', 'light');
//     }
//   };

//   const [icon, setIcon] = useState(true);
//   const handleIcon = () => setIcon(!icon);

//   return (
//     <>
//       <div className="theme-switcher">
//         {icon ? (
//           <FiSun onClick={toggleTheme} className="sun" />
//         ) : (
//           <FiMoon onClick={toggleTheme} className="moon" />
//         )}
//       </div>
//     </>
//   );
// };
// export default useDarkMode;
