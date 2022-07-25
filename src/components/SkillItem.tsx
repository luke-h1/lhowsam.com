import type { IconType } from 'react-icons';
import styles from './SkillItem.module.scss';

interface Props {
  icon: IconType;
  text: string;
  testId?: string;
}

const SkillItem = ({ icon, text, testId }: Props) => {
  return (
    <li>
      <span
        className={styles.bg}
        data-testid={testId}
        key={`${text}-${testId}`}
      >
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