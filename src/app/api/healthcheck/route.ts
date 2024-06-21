export async function GET() {
  const deployedAt = process.env.DEPLOYED_AT
    ? process.env.DEPLOYED_AT.trim()
    : 'unknown';

  const body = JSON.stringify({
    status: 'OK',
    deployedAt,
  });

  return new Response(body, {
    status: 200,
    statusText: 'OK',
  });
}
