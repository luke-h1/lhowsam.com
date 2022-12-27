import LinkedInIcon from '../../../../public/icons/linkedin.svg';
import TwitterIcon from '../../../../public/icons/twitter.svg';
import { SocialLink } from '../../SocialLink/SocialLink';
import styles from './Share.module.scss';

const Share = () => {
  const href = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);

  const socialLinks = [
    {
      href: `https://twitter.com/share?url=${href}&text=${title}&hashtags=frontlive`,
      icon: TwitterIcon,
      label: 'on Twitter',
    },
    {
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${href}`,
      icon: LinkedInIcon,
      label: 'On LinkedIn',
    },
  ];

  return (
    <article className={styles.wrapper}>
      <h2 className="visually-hidden">Share</h2>
      <div className={styles.content}>
        <p className={styles.text}>
          Share:
          <span className={styles.icons}>
            {socialLinks &&
              socialLinks.map(link => (
                <SocialLink
                  key={link.label}
                  href={link.href}
                  icon={link.icon}
                  label={link.label}
                />
              ))}
          </span>
          <span className={styles.link}>
            {' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/share?url=${href}&text=${title}&hashtags=frontlive`}
              className="share"
            >
              Twitter
            </a>{' '}
            |{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${href}`}
              className="share"
            >
              Linkedin
            </a>
          </span>
        </p>
      </div>
    </article>
  );
};
export default Share;
