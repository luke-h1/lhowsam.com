import ErrorContent from '@frontend/components/ErrorContent';
import Page from '@frontend/components/Page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 page not found',
  description: '404 page not found',
};

export default function ErrorPage() {
  return (
    <Page showHeader={false} showFooter={false}>
      <ErrorContent statusCode="404" title="404 page not found" />
    </Page>
  );
}
