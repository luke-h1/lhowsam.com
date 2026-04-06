import { siteConfig } from '../config/site';

export function absoluteUrl(path: string) {
  if (!path) {
    return `${siteConfig.siteUrl}/`;
  }

  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return new URL(path, siteConfig.siteUrl).toString();
}

export function toJsonLd(value: object) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
