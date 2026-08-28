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

export function toJsonLdScripts(value: object | object[]) {
  return (Array.isArray(value) ? value : [value]).map(toJsonLd);
}

/**
 * Google truncates titles around 60 characters. Append the brand suffix only
 * while it still fits, so a long post title keeps its own words rather than
 * spending the visible budget on a suffix that gets clipped anyway.
 */
export const SEO_TITLE_MAX = 60;

export function withBrand(title: string, ...suffixes: string[]) {
  return suffixes.reduce((current, suffix) => {
    const next = `${current} | ${suffix}`;
    return next.length <= SEO_TITLE_MAX ? next : current;
  }, title);
}
