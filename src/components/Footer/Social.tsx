import styles from './Footer.module.scss';

const Social = () => {
  return (
    <ul className={styles.socialList}>
      <li>
        <a
          href="https://twitter.com/LukeH_1999"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          href="http://github.com/luke-h1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/lukehowsam"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
};
export default Social;
