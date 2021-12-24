import Head from './Head';
import Nav from './Nav';

interface Props {
  children: React.ReactNode;
  className?: string;
  description?: string;
  ogImage?: string;
  title: string;
}

const Page = ({ children, className, description, ogImage, title }: Props) => {
  return (
    <div className={className}>
      <Head title={title} description={description} ogImage={ogImage} />
      <Nav />
      {children}
    </div>
  );
};
export default Page;
