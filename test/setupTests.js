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

// jest.mock('next/navigation', () => ({
//   __esModule: true,
//   useRouter: () => ({
//     push: jest.fn(),
//     replace: jest.fn(),
//     prefetch: jest.fn(),
//     isFallback: false,
//   }),
//   useSearchParams: () => ({
//     get: () => {},
//   }),
// }));

if (typeof window !== 'undefined') {
  // fetch polyfill for making API calls.
  require('cross-fetch');
}
global.Request = jest.requireActual('node-fetch').Request;
global.Response = jest.requireActual('node-fetch').Response;
