import featureFlags, { AllowedFeatureFlag } from '@frontend/utils/featureFlags';

const useFeatureFlag = (name: AllowedFeatureFlag): boolean => {
  const featureFlag = featureFlags.find(flag => flag.name === name);

  if (!featureFlag) {
    // eslint-disable-next-line no-console
    console.warn(`Feature flag with name "${name}" not found`);
    return false;
  }

  return featureFlag.enabled;
};
export default useFeatureFlag;
