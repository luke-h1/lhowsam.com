'use client';

import ErrorContent from '@frontend/components/ErrorContent';

const ErrorPage = () => {
  return <ErrorContent title="500 internal server error" statusCode="500" />;
};
export default ErrorPage;
