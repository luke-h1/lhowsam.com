'use client';

import ErrorContent from '@frontend/components/ErrorContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '500 internal server error',
  description: '500 internal server error',
};

const ErrorPage = () => {
  return <ErrorContent title="500 internal server error" statusCode="500" />;
};
export default ErrorPage;
