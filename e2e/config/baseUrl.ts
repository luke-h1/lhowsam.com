export const baseUrl = (process.env.BASE_URL ?? 'http://127.0.0.1:4321').replace(
  /\/$/,
  '',
);
