'use client';

import { ReactNode, useState } from 'react';
import Banner from './Banner/Banner';
import Box from './Box/Box';
import CommandMenu from './CommandMenu/CommandMenu';
import Footer from './Footer/Footer';
import PageHeader from './PageHeader/PageHeader';
import { Toaster } from './Toast/Toast';

interface PageProps {
  children: ReactNode;
  bannerOpen?: boolean;
  showFooter?: boolean;
  heading: string;
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
      <div className="container">
        <Banner setOpen={setOpen} />
        <Box
          maxWidth="text"
          style={{
            margin: '0 auto',
          }}
        >
          <PageHeader heading={heading} description={description} />
          {children}
          <CommandMenu open={open} setOpen={setOpen} />
          <Toaster />
        </Box>
      </div>
      {showFooter && <Footer />}
    </>
  );
};
export default Page;
