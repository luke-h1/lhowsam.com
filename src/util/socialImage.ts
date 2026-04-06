import { siteConfig } from '../config/site';

export const defaultSocialImagePath = siteConfig.defaultOgImage;

export const resolveSocialImage = (image?: string) =>
  image ?? defaultSocialImagePath;
