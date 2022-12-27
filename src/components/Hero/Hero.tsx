import Link from 'next/link';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import styles from './Hero.module.scss';

interface Props {
  title: string;
  description?: string;
  compact?: boolean;
}

const Hero = ({ title, compact, description }: Props) => {
  return (
    <div className={compact ? styles.wrapperCompact : styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      {description && <p className={styles.description}>{description}</p>}
      <ButtonGroup>
        <Link href="/about" className="button">
          More about me
        </Link>
        <Link href="/static/cv-latest.pdf" className="button">
          Resume
        </Link>
      </ButtonGroup>
    </div>
  );
};
export default Hero;
