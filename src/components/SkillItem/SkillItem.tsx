'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import type { IconType } from 'react-icons';
import s from './SkillItem.module.scss';

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
      <span className={s.bg} data-testid={`${text}-icon`} key={`${text}-icon`}>
        {icon({
          size: 30,
          className: s.skillIcon,
        })}
      </span>
      <div className={s.flex}>
        <small className={s.skillText}>{text}</small>
      </div>
    </li>
  );
};

export default SkillItem;
