export async function GET() {
  const deployedAt = process.env.DEPLOYED_AT
    ? process.env.DEPLOYED_AT.trim()
    : 'unknown';

  const deployedBy = process.env.DEPLOYED_BY
    ? process.env.DEPLOYED_BY.trim()
    : 'unknown';

  const body = JSON.stringify({
    status: 'OK',
    deployedAt,
    deployedBy,
  });

  return new Response(body, {
    status: 200,
    statusText: 'OK',
  });
}
