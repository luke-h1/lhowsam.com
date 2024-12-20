// eslint-disable-next-line @typescript-eslint/no-unused-vars
const allowedFeatureFlags = ['talks', 'newJob'] as const;

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
