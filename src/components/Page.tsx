'use client';

import { ReactNode, useState } from 'react';
import Box from './Box';
import Footer from './Footer';
import Header from './Header';
import PageHeader, { PageHeaderProps } from './PageHeader';
import { Toaster } from './Toast';

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
      <Header open={open} setOpen={setOpen} />
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
