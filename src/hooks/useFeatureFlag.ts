import featureFlags, { AllowedFeatureFlag } from '@frontend/utils/featureFlags';

const useFeatureFlag = (name: AllowedFeatureFlag): boolean => {
  const featureFlag = featureFlags.find(flag => flag.name === name);

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
