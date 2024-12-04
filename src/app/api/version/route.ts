import pkg from '../../../../package.json';

export async function GET() {
  const deployedAt = process.env.DEPLOYED_AT
    ? process.env.DEPLOYED_AT.trim()
    : 'unknown';

  const deployedBy = process.env.DEPLOYED_BY
    ? process.env.DEPLOYED_BY.trim()
    : 'unknown';

  const gitSha = process.env.GIT_SHA ? process.env.GIT_SHA.trim() : 'unknown';

  const body = JSON.stringify({
    version: pkg.version,
    deployedBy,
    deployedAt,
    gitSha,
  });

  return new Response(body, {
    status: 200,
  });
}
