import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import styles from './SocialList.module.scss';

const SocialList = () => {
  const iconSize = 21;

  return (
    <ul className={styles.socialMedia}>
      <li>
        <a
          href="https://twitter.com/LukeH_1999"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to my Twitter profile"
        >
          <FiTwitter size={iconSize} />
        </a>
        <span className={styles.socialName}>Twitter</span>
      </li>
      <li>
        <a
          href="https://github.com/luke-h1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to my Github profile"
        >
          <AiFillGithub size={iconSize} />
        </a>
        <span className={styles.socialName}>Github</span>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/lukehowsam"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to my LinkedIn profile"
        >
          <AiFillLinkedin size={iconSize} />
        </a>
        <span className={styles.socialName}>LinkedIn</span>
      </li>
    </ul>
  );
};

export default SocialList;
