import styles from './Share.module.scss';
import EmailIcon from './share/EmailIcon';
import EmailShareButton from './share/EmailShareButton';
import TwitterIcon from './share/TwitterIcon';
import TwitterShareButton from './share/TwitterShareButton';

interface Props {
  title: string;
  link: string;
}

const Share = ({ title, link }: Props) => {
  return (
    <div className={styles.socialShareButtons}>
      <EmailShareButton title={title} url={link}>
        <EmailIcon size={32} round />
      </EmailShareButton>
      <TwitterShareButton title={title} url={link}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
};
export default Share;
