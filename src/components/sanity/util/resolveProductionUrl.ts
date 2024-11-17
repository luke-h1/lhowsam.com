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

  const previewUrl = new URL(baseUrl);
  const { slug } = doc;

  previewUrl.pathname = `/api/draft`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, getSlug(slug as unknown as Slug));
  previewUrl.searchParams.append(`type`, doc._type);
  return previewUrl.toString().replaceAll('%2F', '/');
}
