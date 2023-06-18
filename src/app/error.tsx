'use client';

import ErrorContent from '@frontend/components/ErrorContent';

const ErrorPage = () => {
  return <ErrorContent statusCode={500} />;
};

export default ErrorPage;
