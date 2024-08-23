import { registerOTel } from '@vercel/otel';

registerOTel({ serviceName: process.env.NEW_RELIC_APP_NAME });
