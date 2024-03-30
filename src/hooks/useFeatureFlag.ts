import featureFlags, { AllowedFeatureFlag } from '@frontend/utils/featureFlags';
import { isServer } from './isServer';

const useFeatureFlag = (name: AllowedFeatureFlag): boolean => {
  const featureFlag = featureFlags.find(flag => flag.name === name);

  const override = featureFlag?.override?.cookie;

  if (
    override &&
    !isServer &&
    document.cookie.includes(`${override?.name}=${override?.value}`)
  ) {
    return true;
  }

  if (!featureFlag) {
    // eslint-disable-next-line no-console
    console.warn(`Feature flag "${name}" not found. Returning false.`);
    return false;
  }

  if (process.env.NODE_ENV === 'development') {
    return true;
  }

  return featureFlag?.enabled as boolean;
};
export default useFeatureFlag;
