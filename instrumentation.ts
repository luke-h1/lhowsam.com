export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // eslint-disable-next-line global-require, @typescript-eslint/no-require-imports, import/extensions
    require('./new-relic-instrumentation.js');
  }
}
