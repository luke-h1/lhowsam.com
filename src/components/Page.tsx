import classNames from 'classnames';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import Header from './Header';
import styles from './Page.module.scss';

const Footer = dynamic(() => import('@src/components/Footer/Footer'));

interface Props {
  children: ReactNode;
  title: string;
  showHero?: boolean;
  center?: boolean;
  header?: boolean;
  footer?: boolean;
}

const Page = ({
  children,
  title,
  showHero,
  center,
  header = true,
  footer = true,
}: Props) => {
  return (
    <>
      {header && <Header showHero={showHero} title={title} />}
      <main>
        <div
          className={classNames(styles.main, {
            [styles.center]: center,
          })}
        >
          {children}
        </div>
      </main>
      {footer && <Footer />}
    </>
  );
};

export default Page;
