import classNames from 'classnames';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import Navigation from './Navigation/Navigation';
import styles from './Page.module.scss';

const Footer = dynamic(() => import('@frontend/components/Footer/Footer'));

interface Props {
  children: ReactNode;
  center?: boolean;
  header?: boolean;
  footer?: boolean;
}

const Page = ({ children, center, header = true, footer = true }: Props) => {
  return (
    <main>
      <div
        className={classNames(styles.main, {
          [styles.center]: center,
        })}
      >
        {header && <Navigation />}
        {children}
        {footer && <Footer />}
      </div>
    </main>
  );
};

export default Page;
