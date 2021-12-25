import Nav from '@src/components/Nav';
import Head from './Head';

interface Props {
  children: React.ReactNode;
  className?: string;
  description?: string;
  ogImage?: string;
  title: string;
}

const Page = ({
  children,
  className = 'container',
  description,
  ogImage,
  title,
}: Props) => {
  return (
    <>
      <div className={className}>
        <Nav />
        <Head title={title} description={description} ogImage={ogImage} />
        {children}
      </div>
    </>
  );
};
export default Page;
