import { useTheme } from 'next-themes';
import type { IconType } from 'react-icons';
import styles from './Skillitem.module.scss';

interface Props {
  icon: IconType;
  text: string;
}

const SkillItem = ({ icon, text }: Props) => {
  const theme = useTheme();

  return (
    <li>
      <span className={styles.bg}>
        {icon({
          className: styles.skillIcon,
          fill: theme.theme === 'light' ? '#000' : '#fff',
        })}
      </span>
      <div className={styles.flex}>
        <small className={styles.skillText}>{text}</small>
      </div>
    </li>
  );
};

export default SkillItem;
