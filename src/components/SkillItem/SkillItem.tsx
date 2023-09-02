'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import type { IconType } from 'react-icons';
import * as styles from './SkillItem.css';

interface Props {
  icon: IconType;
  text: string;
}

const SkillItem = ({ icon, text }: Props) => {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--skill-icon-color', '#fff');
    } else {
      root.style.setProperty('--skill-icon-color', '#000');
    }
  }, [theme]);

  return (
    <li>
      <span className={styles.bg} data-testid={`${text}-icon`}>
        {icon({
          size: 30,
          className: styles.skillIcon,
        })}
      </span>
      <div className={styles.flex}>
        <small className={styles.skillText}>{text}</small>
      </div>
    </li>
  );
};

export default SkillItem;
