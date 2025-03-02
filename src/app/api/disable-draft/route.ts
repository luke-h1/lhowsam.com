import { draftMode } from 'next/headers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const draft = await draftMode();

  draft.disable();

  return new Response(null, {
    status: 302,
    headers: {
      Location: `/`,
    },
  });
}
