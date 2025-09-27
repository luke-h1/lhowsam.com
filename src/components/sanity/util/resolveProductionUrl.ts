// resolveProductionUrl.ts
import type { SanityDocument, Slug } from 'sanity';

const previewSecret = process.env.SANITY_STUDIO_DRAFT_SECRET;
const remoteUrl = process.env.NEXT_PUBLIC_URL;

const localUrl = `http://localhost:3000`;

function getSlug(slug: Slug) {
  if (!slug) {
    return '/';
  }
  if (slug.current) {
    return slug.current;
  }

  return '/';
}

export default function resolveProductionUrl(doc: SanityDocument) {
  const baseUrl =
    window.location.hostname === 'localhost' ? localUrl : remoteUrl;

  const { slug, _type } = doc;
  const slugValue = getSlug(slug as unknown as Slug);

  // For presentation tool, return direct URLs to content
  if (_type === 'post') {
    return `${baseUrl}/blog/${slugValue}`;
  }
  if (_type === 'project') {
    return `${baseUrl}/projects/${slugValue}`;
  }
  if (_type === 'work') {
    return `${baseUrl}/work/${slugValue}`;
  }

  // Fallback to draft API for preview
  const previewUrl = new URL(baseUrl);
  previewUrl.pathname = `/api/draft`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, slugValue);
  previewUrl.searchParams.append(`type`, _type);
  return previewUrl.toString().replaceAll('%2F', '/');
}
