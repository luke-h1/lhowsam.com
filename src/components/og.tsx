import { useRouter } from 'next/router';
import React from 'react';

const OGImage: React.FC = () => {
  const router = useRouter();
  const { title } = router.query;
  return (
    <div className="flex flex-col flex-1 px-12 py-8 justify-center align-center">
      <div className="text-6xl font-bold text-gray-900 mt-2">{title}</div>
      <div className="text-6xl text-gray-600 -mt-4">lhowsam.com</div>
      <img src="/icons/logo.png" alt="lhowsam.com" />
    </div>
  );
};
export default OGImage;
