import classnames from 'classnames';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FooterLinks } from '../data/FooterLinks';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={classnames(styles.footer, 'container')}>
      <span>Luke H</span>
      <ul>
        <li>
          <a aria-label='Twitter' className={styles.twitter} href='https://twitter.com/LukeH_1999' target='_blank' rel="noopener noreferrer">
            <AiOutlineTwitter />
          </a>
        </li>
        {FooterLinks && FooterLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} rel='noopener noreferrer' 
            target='_blank'
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
export default Footer;
