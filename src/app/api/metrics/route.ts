/* eslint-disable no-console */
import {
  register,
  collectDefaultMetrics,
  Counter,
  Histogram,
} from 'prom-client';

collectDefaultMetrics({
  prefix: 'l_howsam_',
});

const counter = new Counter({
  name: 'web_server_events',
  help: 'web_server_events server api counter',
  labelNames: ['event', 'statusCode'],
});

const histogram = new Histogram({
  name: 'web_server_processing_time',
  help: 'web_server data fetching and processing time',
  labelNames: ['event', 'statusCode'],
  buckets: [
    0.1, 5, 15, 50, 100, 250, 500, 750, 1000, 1500, 2000, 5000, 10000, 15000,
    20000,
  ],
});
register.registerMetric(counter);

export const sendPrometheus = (logDetails: {
  event: string;
  statusCode: string;
}) => {
  try {
    const { event, statusCode } = logDetails || {};
    counter.labels(event, statusCode).inc();
  } catch (error) {
    console.log('Prometheus counter event error', error);
  }
};

export const sendPrometheusResponseTime = (logDetails: {
  event: string;
  statusCode: string;
  responseTime: number;
}) => {
  try {
    const { event, statusCode, responseTime } = logDetails || {};
    histogram.labels(event, statusCode).observe(responseTime);
  } catch (error) {
    console.log('Prometheus Histogram event error', error);
  }
};

export async function GET(response: Response) {
  response.headers.set('Content-Type', register.contentType);
  response.headers.set('Cache-Control', 'no-store');

  return new Response(await register.metrics(), {
    status: 200,
  });
}
