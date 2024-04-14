'use client';

import {
  PostHogFeature as PHFeature,
  PostHogFeatureProps,
} from 'posthog-js/react';
import { ReactNode } from 'react';

interface Props extends PostHogFeatureProps {
  children: ReactNode;
}

const PostHogFeature = (props: Props) => {
  const { children } = props;
  return <PHFeature {...props}>{children}</PHFeature>;
};
export default PostHogFeature;
