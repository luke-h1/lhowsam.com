import { ReactNode, CSSProperties } from 'react';
import SocialShare from '../SocialShare/SocialShare';
import * as styles from './Meta.css';

export interface MetaItem {
  title: ReactNode;
  description: ReactNode;
}

interface Props {
  items?: MetaItem[];
}

const Meta = ({ items }: Props) => {
  return (
    <dl
      className={styles.root}
      style={
        {
          '--length': items?.length,
        } as CSSProperties
      }
    >
      {items &&
        items.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={styles.item} key={index}>
            <dt
              className={styles.title}
              data-testid={`meta-title-${index + 1}`}
            >
              {item.title}
            </dt>
            <dd data-testid={`meta-description-${index + 1}`}>
              {item.description}
            </dd>
          </div>
        ))}
      <div className={styles.item}>
        <dt className={styles.title}>Share</dt>
        <dd>
          <SocialShare />
        </dd>
      </div>
    </dl>
  );
};
export default Meta;
