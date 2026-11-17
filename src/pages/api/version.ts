import type { APIRoute } from 'astro';
import pkg from '../../../package.json';

export const prerender = false;

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      version: import.meta.env.PUBLIC_APP_VERSION ?? pkg.version,
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
