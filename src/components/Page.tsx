'use client';

import { ReactNode, useState } from 'react';
import Banner from './Banner/Banner';
import Box from './Box/Box';
import Footer from './Footer/Footer';
import PageHeader, { PageHeaderProps } from './PageHeader/PageHeader';

interface PageProps extends PageHeaderProps {
  children: ReactNode;
  bannerOpen?: boolean;
  showFooter?: boolean;
  heading?: string;
  description?: string;
}

const Page = ({
  children,
  bannerOpen = false,
  showFooter = true,
  heading,
  description,
}: PageProps) => {
  const [open, setOpen] = useState(bannerOpen);
  return (
    <>
      <Banner open={open} setOpen={setOpen} />{' '}
      <div className="container">
        <Box
          // maxWidth="container"
          style={{
            margin: '0 auto',
          }}
        >
          <PageHeader heading={heading} description={description} />
          {children}
        </Box>
      </div>
      {showFooter && <Footer />}
    </>
  );
};
export default Page;
