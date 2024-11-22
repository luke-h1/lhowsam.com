'use client';

import ErrorContent from '@frontend/components/ErrorContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '500 internal server error',
  description: '500 internal server error',
};

export default function ErrorPage() {
  return <ErrorContent statusCode="500" title="500 internal server error" />;
}
