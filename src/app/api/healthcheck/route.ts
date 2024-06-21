export async function GET() {
  const body = JSON.stringify({
    status: 'OK',
    deployedAt: process.env.DEPLOYED_AT ?? 'unknown',
  });

  return new Response(body, {
    status: 200,
    statusText: 'OK',
  });
}
