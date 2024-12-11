import '@vanilla-extract/css/disableRuntimeStyles';
import '@testing-library/jest-dom';
import './setupGlobals';
import { loadEnvConfig } from '@next/env';
import './next-router';

loadEnvConfig(process.cwd());
jest.setTimeout(10000);

jest.mock('nanoid', () => {
  return {
    nanoid: () => Math.random().toString(),
  };
});

if (typeof window !== 'undefined') {
  // fetch polyfill for making API calls.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('cross-fetch');
}

global.Request = jest.requireActual('node-fetch').Request;
global.Response = jest.requireActual('node-fetch').Response;

jest.mock('next/font/google', () => ({
  Instrument_Serif: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
}));
