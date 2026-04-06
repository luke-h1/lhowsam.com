import { describe, expect, test } from 'vitest';

import { defaultSocialImagePath, resolveSocialImage } from '../socialImage';

describe('social image helpers', () => {
  test('uses the luke-h1 signature asset as the default social image', () => {
    expect(defaultSocialImagePath).toBe('/og-signature.png');
    expect(resolveSocialImage()).toBe('/og-signature.png');
  });

  test('preserves explicit social images', () => {
    expect(resolveSocialImage('/custom-image.png')).toBe('/custom-image.png');
  });
});
