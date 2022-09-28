import Link from 'next/link';
import Container from './Container';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section>
      <Container size="md">
        <p className={styles.text}>Hey 👋, my name is Luke</p>
        <h1 className={styles.bigTitle}>
          I&#39;m a <span className="gradientText">Software Engineer</span>
        </h1>
        <p className={styles.description}>
          I&#39;m a Software Engineer currently based in Sheffield, UK. I love
          to work with various technologies such as React, CSS, Typescript,
          Node, a11y &amp; performance. I prefer to work on big codebases where
          best practices & high quality code is the norm
        </p>
        <Link href="/about">
          <a className="button">More about me</a>
        </Link>
      </Container>
    </section>
  );
};

export default Hero;
