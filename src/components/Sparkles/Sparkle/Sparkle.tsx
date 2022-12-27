import { CSSProperties } from 'react';
import styles from './Sparkle.module.scss';

interface Props {
  size: number;
  color: string;
  style: CSSProperties;
}

const Sparkle = ({ color, size, style }: Props) => {
  return (
    <span style={style} className={styles.wrapper}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 68 68"
        fill="none"
        className={styles.icon}
        aria-hidden="true"
      >
        <path
          d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
          fill={color}
        />
      </svg>
    </span>
  );
};
export default Sparkle;
