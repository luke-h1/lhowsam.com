const allowedFeatureFlags = ['talks'] as const;

export type AllowedFeatureFlag = (typeof allowedFeatureFlags)[number];

interface FeatureFlag {
  name: AllowedFeatureFlag;
  enabled: boolean;
  description: string;
}

const featureFlags: FeatureFlag[] = [
  {
    name: 'talks',
    description: 'Whether to show the talks page and navigation item',
    enabled: false,
  },
];
export default featureFlags;
