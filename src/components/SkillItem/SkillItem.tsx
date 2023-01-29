import { useTheme } from 'next-themes';
import type { IconType } from 'react-icons';
import * as styles from './SkillItem.css';

interface Props {
  icon: IconType;
  text: string;
}

const SkillItem = ({ icon, text }: Props) => {
  const { theme } = useTheme();
  return (
    <li>
      <span className={styles.bg} data-testid={`${text}-icon`}>
        {icon({
          size: 30,
          className: styles.skillIcon,
          fill: theme === 'dark' ? '#fff' : '#000',
        })}
      </span>
      <div className={styles.flex}>
        <small className={styles.skillText}>{text}</small>
      </div>
    </li>
  );
};

export default SkillItem;
