import Nav from '@src/components/Nav';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Page = ({
  children,
  className = 'container',
}: Props) => {
  return (
    <div className={className}>
      <Nav />
      {children}
    </div>
  );
};
export default Page;
