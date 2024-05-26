import pkg from '../../../../package.json';

export async function GET() {
  const body = JSON.stringify({
    version: pkg.version,
    deployedBy:
      process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_LOGIN ?? 'unknown',
  });

  return new Response(body, {
    status: 200,
  });
}
