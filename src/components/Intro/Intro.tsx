import Link from '@frontend/components/Link';
import * as styles from './Intro.css';

const Intro = () => {
  return (
    <div className={styles.page}>
      <div>
        <h1 className={styles.title} data-testid="intro-heading">
          <strong>Luke //</strong> Software Engineer
        </h1>
      </div>
      <p data-testid="intro-description">
        Software Engineer based in the UK who is interested in React.js,
        Next.js, Typescript, Python and DevOps
      </p>
      <Link href="/about">More about me</Link>
    </div>
  );
};
export default Intro;
