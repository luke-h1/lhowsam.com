import Link from 'next/link';
import ButtonGroup from './ButtonGroup';
import styles from './Hero.module.scss';
import SocialList from './SocialList';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <span className={styles.name}>Hey 👋, I'm Luke</span>
      <span className={styles.description}>I'm a Software Engineer</span>
      <span className={styles.learnMore}>
        <ButtonGroup>
          <Link href="/about">
            <a className="button">More about me</a>
          </Link>
          <Link href="/static/cv.pdf">
            <a className="button">Resume</a>
          </Link>
        </ButtonGroup>
      </span>
      <SocialList />
    </section>
  );
};

export default Hero;
