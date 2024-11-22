import { register, collectDefaultMetrics } from 'prom-client';

export const runtime = 'edge';

export async function GET() {
  return new Response(await register.metrics(), {
    status: 200,
    headers: {
      'Content-Type': register.contentType,
    },
  });
}

collectDefaultMetrics({
  prefix: 'lhowsam',
});
