'use client';

import ErrorContent from '@frontend/components/ErrorContent';
import Providers from '@frontend/components/Providers';

const ErrorPage = () => {
  return (
    <Providers>
      <ErrorContent statusCode={500} />
    </Providers>
  );
};

export default ErrorPage;
