export async function GET() {
  const body = JSON.stringify({
    status: 'OK',
    uptime: process.uptime(),
  });

  return new Response(body, {
    status: 200,
    statusText: 'OK',
  });
}
