import FormattedDate from '@frontend/components/FormattedDate/FormattedDate';
import { Image as SanityImage } from '@frontend/types/sanity';
import styles from './Info.module.scss';

export type FrontMatter = {
  title: string;
  intro: string;
  publishedAt?: string;
  published: boolean;
  image?: SanityImage;
  readingTime: string;
};

interface Props {
  frontMatter: FrontMatter;
}

const Info = ({ frontMatter }: Props) => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <span className={styles.text}>
          <span className="visually-hidden">time to read</span>
          {frontMatter.readingTime}
        </span>
      </li>
      <li className={styles.listItem}>
        <span className="visually-hidden">Published on:</span>
        <FormattedDate>{frontMatter.publishedAt as string}</FormattedDate>
      </li>
    </ul>
  );
};
export default Info;
