import { StatsigProvider } from '@statsig/react-bindings';
import { StatsigAutoCapturePlugin } from '@statsig/web-analytics';
import React from 'react';
import StatsigClickTracker from './StatsigClickTracker';

type Props = {
  clientKey: string;
  environment: string;
};

export default function StatsigAnalyticsClient({
  clientKey,
  environment,
}: Props) {
  return (
    <StatsigProvider
      sdkKey={clientKey}
      user={{}}
      options={{
        environment: { tier: environment },
        plugins: [new StatsigAutoCapturePlugin()],
      }}
      loadingComponent={null}
    >
      <StatsigClickTracker />
    </StatsigProvider>
  );
}
