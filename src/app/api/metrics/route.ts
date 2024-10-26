import { register, collectDefaultMetrics } from 'prom-client';

const prefix =
  process.env.NEXT_PUBLIC_URL === 'https://lhowsam.com' ? 'prod' : 'dev';

export async function GET() {
  return new Response(await register.metrics(), {
    status: 200,
    headers: {
      'Content-Type': register.contentType,
    },
  });
}

collectDefaultMetrics({
  prefix: `lhowsam-${prefix}`,
  labels: { app: 'lhowsam' },
});
