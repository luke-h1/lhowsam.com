import { draftMode } from 'next/headers';

export async function GET(request: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { searchParams } = new URL(request.url);

  const draft = draftMode();

  draft.disable();

  return new Response(null, {
    status: 302,
    headers: {
      Location: `/`,
    },
  });
}
