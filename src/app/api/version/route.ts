import pkg from '../../../../package.json';

export async function GET() {
  const body = JSON.stringify({
    version: pkg.version,
  });

  return new Response(body, {
    status: 200,
  });
}
