import { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import s from './Page.module.scss';

interface Props {
  children: ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <div className={s.container}>
      <Header />
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  );
};
export default Page;
