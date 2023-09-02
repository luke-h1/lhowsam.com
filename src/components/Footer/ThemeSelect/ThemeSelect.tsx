/* eslint-disable jsx-a11y/label-has-associated-control */
import VisuallyHidden from '@frontend/components/VisuallyHidden/VisuallyHidden';
import { useMounted } from '@frontend/hooks/useMounted';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor, Code } from 'react-feather';
import * as styles from './ThemeSelect.css';

const icons = {
  system: <Monitor width="0.9em" />,
  light: <Sun width="0.9em" />,
  dark: <Moon width="0.9em" />,
} as const;

type Icon = keyof typeof icons;

const ThemeSelect = () => {
  const { isMounted } = useMounted();
  const { theme, setTheme } = useTheme();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <VisuallyHidden>
        <label htmlFor="theme-select">Select theme</label>
      </VisuallyHidden>
      <div className={styles.root}>
        <span className={styles.icon}>{icons[theme as Icon]}</span>
        <select
          value={theme}
          onChange={e => setTheme(e.target.value)}
          className={styles.select}
          id="theme-select"
        >
          <option value="system" id='theme-system'>System</option>
          <option value="light" id='theme-light'>Light</option>
          <option value="dark" id='theme-dark'>Dark</option>
        </select>
        <span className={styles.arrow}>
          <Code
            width="0.9em"
            style={{
              transform: 'rotate(90deg)',
            }}
          />
        </span>
      </div>
    </>
  );
};
export default ThemeSelect;
