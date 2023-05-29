'use client';

import { useTheme } from 'next-themes';
import { Monitor, Sun, Moon } from 'react-feather';
import VisuallyHidden from '../../VisuallyHidden/VisuallyHidden';
import * as styles from './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.root}>
      <button
        className={
          styles.toggleVariant[theme === 'system' ? 'active' : 'initial']
        }
        type="button"
        id="theme-system"
        onClick={() => setTheme('system')}
      >
        <VisuallyHidden>Change theme to system mode</VisuallyHidden>
        <Monitor width="0.9em" />
        {theme === 'system' && <span className={styles.shadow} />}
      </button>
      <button
        className={
          styles.toggleVariant[theme === 'light' ? 'active' : 'initial']
        }
        type="button"
        id="theme-light"
        onClick={() => {
          setTheme('light');
        }}
      >
        <VisuallyHidden>Change theme to light mode</VisuallyHidden>
        <Sun width="0.9em" />
        {theme === 'light' && <span className={styles.shadow} />}
      </button>
      <button
        className={
          styles.toggleVariant[theme === 'dark' ? 'active' : 'initial']
        }
        onClick={() => setTheme('dark')}
        id="theme-dark"
        type="button"
      >
        <VisuallyHidden>Change theme to dark mode</VisuallyHidden>
        <Moon width=".9em" />
        {theme === 'dark' && <span className={styles.shadow} />}
      </button>
    </div>
  );
};
export default ThemeToggle;
