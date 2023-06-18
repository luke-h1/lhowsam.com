export async function GET() {
  return new Response(null, {
    headers: {
      'WWW-Authenticate': 'Basic realm="Access to dev.lhowsam.com"',
    },
    status: 401,
    statusText: 'Access denied',
  });
}
