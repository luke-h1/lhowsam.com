import type { IconType } from 'react-icons';
import styles from './Skillitem.module.scss';

interface Props {
  icon: IconType;
  text: string;
}

const SkillItem = ({ icon, text }: Props) => {
  return (
    <li>
      <span className={styles.bg}>
        {icon({
          className: styles.skillIcon,
          fill: '#000',
        })}
      </span>
      <div className={styles.flex}>
        <small className={styles.skillText}>{text}</small>
      </div>
    </li>
  );
};

export default SkillItem;
