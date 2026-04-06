import type { APIContext } from 'astro';

export const prerender = false;

export async function POST({ request }: APIContext) {
  const body = await request.text();
  let payload: {
    sent_at: string;
    sdk: { name: string; version: string };
    dsn: string;
  };

  try {
    payload = JSON.parse(body.split('\n')[0] ?? body);
  } catch (err) {
    console.error(err);
    return new Response(null, { status: 400 });
  }

  if (!payload.dsn) {
    return new Response('Invalid request', { status: 400 });
  }

  const dsn = new URL(payload.dsn);
  const projectID = dsn.pathname.replace(/\//g, '');

  if (projectID !== import.meta.env.SECRET_SENTRY_PROJECT_ID) {
    return new Response('Invalid request', { status: 400 });
  }

  await fetch(`https://sentry.io/api/${projectID}/envelope/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-sentry-envelope',
    },
    body: JSON.stringify(payload),
  });

  return new Response(null, { status: 200 });
}
