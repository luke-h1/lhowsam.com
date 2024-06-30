'use client';

import { ReactNode, useState } from 'react';
import Banner from './Banner/Banner';
import Box from './Box/Box';
import Footer from './Footer/Footer';

interface PageProps {
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
      <div className="container">
        {/* <Banner setOpen={setOpen} /> */}
        <Banner open={open} setOpen={setOpen} />
        <Box
          style={{
            margin: '0 auto',
          }}
        >
          {/* <PageHeader heading={heading} description={description} /> */}
          {children}
        </Box>
      </div>
      {showFooter && <Footer />}
    </>
  );
};
export default Page;
