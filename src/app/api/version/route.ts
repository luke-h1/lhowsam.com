import pkg from '../../../../package.json';

export async function GET() {
  const body = JSON.stringify({
    version: pkg.version,
    gitCommitRef: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ?? 'unknown',
    tz: process.env.TZ ?? 'unknown',
    lambdaVersion: process.env.AWS_LAMBDA_FUNCTION_VERSION ?? 'unknown',
  });

  return new Response(body, {
    status: 200,
  });
}
