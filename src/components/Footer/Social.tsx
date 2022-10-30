import styles from './Footer.module.scss';

const Social = () => {
  return (
    <ul className={styles.socialList}>
      <li>
        <a
          href="http://github.com/luke-h1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to my Github profile"
        >
          Github
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/lukehowsam"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to my LinkedIn profile"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
};
export default Social;
