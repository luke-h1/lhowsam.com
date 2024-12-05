// import winston from 'winston';
// import { NewRelicTransport } from 'winston-nr';

// const newRelicTransport = new NewRelicTransport({
//   apiUrl: 'https://log-api.newrelic.com/log/v1',
//   apiKey: process.env.NEW_RELIC_LICENSE_KEY,
//   compression: true,
//   retries: 3,
//   batchSize: 10,
//   batchTimeout: 5000,
//   format: winston.format.json(),
// });

// export const logger = winston.createLogger({
//   level: 'INFO',
//   defaultMeta: { serviceName: process.env.NEW_RELIC_APP_NAME },
//   transports: [newRelicTransport],
// });
