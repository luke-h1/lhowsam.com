import classNames from 'classnames';
import { ReactNode, Suspense } from 'react';
import Footer from './Footer/Footer';
import Header from './Header';
import styles from './Page.module.scss';

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
        <div className={classNames(styles.main, center && styles.center)}>
          {children}
        </div>
      </main>
      <Suspense fallback={null}>{footer && <Footer />}</Suspense>
    </>
  );
};

export default Page;
