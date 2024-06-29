'use client';

import { ReactNode, useState } from 'react';

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
        <Box
          maxWidth="text"
          style={{
            margin: '0 auto',
          }}
        >
          {/* <PageHeader heading={heading} description={description} /> */}
          {children}
          {/* <CommandMenu open={open} setOpen={setOpen} /> */}
        </Box>
      </div>
      {showFooter && <Footer />}
    </>
  );
};
export default Page;
