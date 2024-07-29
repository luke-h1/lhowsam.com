import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import Box from './Box';
import Header from './Header';
import PageHeader, { PageHeaderProps } from './PageHeader';
import { Toaster } from './Toaster';

const Footer = dynamic(() => import('./Footer'));

interface PageProps extends PageHeaderProps {
  children: ReactNode;
  showFooter?: boolean;
  heading?: string;
  description?: string;
}

const Page = ({
  children,
  showFooter = true,
  heading,
  description,
}: PageProps) => {
  return (
    <>
      <Header />
      <div className="container">
        <Box
          maxWidth="container"
          style={{
            margin: '0 auto',
          }}
        >
          <PageHeader heading={heading} description={description} />
          {children}
          <Toaster />
        </Box>
      </div>
      {showFooter && <Footer />}
    </>
  );
};
export default Page;
