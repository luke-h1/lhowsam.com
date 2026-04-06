import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      version: '1.0.0',
      deployedBy: import.meta.env.PUBLIC_DEPLOYED_BY,
      deployedAt: import.meta.env.PUBLIC_DEPLOYED_AT,
      gitSha: import.meta.env.PUBLIC_GIT_SHA,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    },
  );
};
