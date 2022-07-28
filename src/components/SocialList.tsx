import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import styles from './SocialList.module.scss';

const SocialList = () => {
  return (
    <ul className={styles.socialMedia}>
      <li>
        <a
          href="https://twitter.com/LukeH_1999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter />
        </a>
        <span className={styles.socialName}>Twitter</span>
      </li>
      <li>
        <a
          href="http://github.com/luke-h1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <span className={styles.socialName}>Github</span>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/lukehowsam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
