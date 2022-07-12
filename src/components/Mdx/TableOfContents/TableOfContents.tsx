import clsx from 'clsx';
import Link from 'next/link';
import styles from './TableOfContents.module.scss';

interface Props {
  contents?: {
    text?: string;
    id: string;
    level: string;
  }[];
  currentActiveHeaderId: string;
}

const TableOfContents = ({ contents, currentActiveHeaderId }: Props) => {
  return (
    <aside className={styles.aside}>
      <h2 className={styles.title}>Table of contents</h2>
      <nav className={styles.nav}>
        <Link href="#introduction">
          <a
            className={clsx(styles.link, styles.H2, {
              [styles.active]: currentActiveHeaderId === 'introduction',
            })}
          >
            Introduction
          </a>
        </Link>
        {contents &&
          contents.map(content => (
            <Link href={`#${content.id}`} key={content.id}>
              <a
                className={clsx(styles.link, styles[content.level], {
                  [styles.active]: currentActiveHeaderId === content.id,
                })}
              >
                {content.text}
              </a>
            </Link>
          ))}
      </nav>
    </aside>
  );
};

export default TableOfContents;
