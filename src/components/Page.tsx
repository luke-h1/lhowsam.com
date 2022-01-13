import Nav from '@src/components/Nav';
import Head from './Head';

interface Props {
  children: React.ReactNode;
  className?: string;
  ogImage?: string;
}

const Page = ({
  children,
  className = 'container',
  ogImage,
}: Props) => {
  return (
    <div className={className}>
      <Nav />
      <Head ogImage={ogImage} />
      {children}
    </div>
  );
};
export default Page;
