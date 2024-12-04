import { draftMode } from 'next/headers';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');
  const documentType = searchParams.get('type');

  const { SANITY_DRAFT_SECRET } = process.env;

  if (secret !== SANITY_DRAFT_SECRET) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  if (!slug) {
    return new Response('Not Found', {
      status: 404,
    });
  }

  if (!documentType) {
    return new Response('No document type provided', {
      status: 404,
    });
  }

  const draft = draftMode();

  draft.enable();

  const part = documentType === 'project' ? 'projects' : 'blog';

  return new Response(null, {
    status: 302,
    headers: {
      Location: `${process.env.NEXT_PUBLIC_URL}/${part}/${slug}?`,
      draft: 'true',
    },
  });
}
