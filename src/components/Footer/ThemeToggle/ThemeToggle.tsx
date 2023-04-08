'use client';

import VisuallyHidden from '@frontend/components/VisuallyHidden/VisuallyHidden';
import { useMounted } from '@frontend/hooks/useMounted';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Monitor, Sun, Moon } from 'react-feather';
import * as styles from './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { isMounted } = useMounted();

  if (!isMounted) {
    return <div className={styles.root} />;
  }

  return (
    <motion.div className={styles.root} layout layoutRoot>
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
        {theme === 'system' && (
          <motion.span
            className={styles.shadow}
            layout
            layoutId="theme-toggle-shadow"
          />
        )}
      </button>
      <button
        className={
          styles.toggleVariant[theme === 'light' ? 'active' : 'initial']
        }
        type="button"
        id="theme-light"
        onClick={() => setTheme('light')}
      >
        <VisuallyHidden>Change theme to light mode</VisuallyHidden>
        <Sun width="0.9em" />
        {theme === 'light' && (
          <motion.span
            className={styles.shadow}
            layout
            layoutId="theme-toggle-shadow"
          />
        )}
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
        {theme === 'dark' && (
          <motion.span
            className={styles.shadow}
            layout
            layoutId="theme-toggle-shadow"
          />
        )}
      </button>
    </motion.div>
  );
};
export default ThemeToggle;
