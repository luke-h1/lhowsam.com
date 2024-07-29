import ErrorContent from '@frontend/components/ErrorContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 page not found',
  description: '404 page not found',
};

const ErrorPage = () => {
  return <ErrorContent title="404 page not found" statusCode="404" />;
};
export default ErrorPage;
