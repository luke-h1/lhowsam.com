import Link from 'next/link';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import SocialList from '../SocialList/SocialList';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <span className={styles.name} id="name">
        Hey 👋, I'm Luke
      </span>
      <span className={styles.description} id="intro">
        I'm a Software Engineer
      </span>
      <span className={styles.learnMore}>
        <ButtonGroup>
          <Link href="/about" className="button">
            More about me
          </Link>
          <Link href="/static/cv-latest.pdf" className="button">
            Resume
          </Link>
        </ButtonGroup>
      </span>
      <SocialList />
    </section>
  );
};

export default Hero;