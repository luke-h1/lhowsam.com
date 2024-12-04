export async function GET() {
  return new Response(JSON.stringify({ status: 'OK' }), {
    status: 200,
    statusText: 'OK',
  });
}
