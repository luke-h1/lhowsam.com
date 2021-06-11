import { NextRouter } from 'next/router';
// @ts-ignore
const mockRouter: NextRouter = {
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};
export function useRouter() {
  return {
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
  };
}
export default mockRouter;
