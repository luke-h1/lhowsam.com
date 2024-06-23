import { ReactNode } from 'react';
import Box from '../Box/Box';

interface PageProps {
  children: ReactNode;
  showFooter?: boolean;
  heading?: string;
  description?: string;
}

const Page = ({ children }: PageProps) => {
  return (
    <div className="container">
      <Box
        maxWidth="container"
        style={{
          margin: '0 auto',
        }}
      >
        {children}
      </Box>
    </div>
  );
};

export default Page;
