import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import Box from './Box';
import Header from './Header';
import { Toaster } from './Toaster';

interface PageProps {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}
const Footer = dynamic(() => import('./Footer'));

export default function Page({
  children,
  showFooter = true,
  showHeader = true,
}: PageProps) {
  return (
    <>
      <div className="container">
        {showHeader && <Header />}

        <Box
          maxWidth="container"
          style={{
            margin: '0 auto',
          }}
        >
          {children}
          <Toaster />
        </Box>
      </div>
      {showFooter && <Footer />}
    </>
  );
}
