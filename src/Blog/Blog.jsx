import React, { Suspense, lazy } from 'react';
import { importMDX } from 'mdx.macro';

const Content = lazy(() => importMDX('./Content.mdx'));
const Blog = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </div>
  );
};
export default Blog;
