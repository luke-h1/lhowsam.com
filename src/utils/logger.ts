/* eslint-disable no-console */

const logger = {
  debugGroup(name: string, ...args: unknown[]) {
    if (process.env.NODE_ENV === 'development') {
      console.group(name, ...args);
    }
  },
  debugGroupEnd() {
    if (process.env.NODE_ENV === 'development') {
      console.groupEnd();
    }
  },
  debug(...args: unknown[]) {
    if (process.env.NODE_ENV === 'development') {
      console.log(...args);
    }
  },
  debugTime(...args: unknown[]) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[${new Date().toISOString()}]`, ...args);
    }
  },
  info(message: string) {
    if (process.env.NODE_ENV === 'test') {
      return;
    }

    console.info(message);
  },
  warn(message: string) {
    if (process.env.NODE_ENV === 'test') {
      return;
    }

    console.warn(message);
  },
  error(error: unknown) {
    if (process.env.NODE_ENV === 'test') {
      return;
    }

    console.error(error);
  },
};

export default logger;
