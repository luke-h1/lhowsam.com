import { definePreview } from 'next-sanity/preview';
import { clientOptions } from './sanity.client';

function onPublicAccessOnly() {
  throw new Error("Unable to load preview as you're not logged in");
}

export const usePreview = definePreview({
  projectId: clientOptions.projectId as string,
  dataset: clientOptions.dataset as string,
  onPublicAccessOnly,
});
