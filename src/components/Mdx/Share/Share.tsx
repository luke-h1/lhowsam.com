import { Post, Project } from '@src/types/sanity';
import Link from '../Link/Link';
import styles from './Share.module.scss';

interface Props {
  href: string;
  title: string;
}

const Share = ({ href, title }: Props) => {
  return (
    <div className={styles.share}>
      <Link href={`https://twitter.com/share?url=${href}&text=${title} -`}>
        Share on twitter
      </Link>
      <Link
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${href}`}
      >
        Share on LinkedIn
      </Link>
    </div>
  );
};

export default Share;
