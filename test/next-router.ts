import mockRouter from 'next-router-mock';
import { createDynamicRouteParser } from 'next-router-mock/dynamic-routes';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

mockRouter.useParser(
  createDynamicRouteParser([
    // @see https://github.com/scottrippey/next-router-mock#dynamic-routes
  ]),
);

jest.mock<typeof import('next/navigation')>('next/navigation', () => {
  const actual = jest.requireActual('next/navigation');
  const nextRouterMock = jest.requireActual('next-router-mock');

  const useRouter = jest.fn().mockImplementation(() => {
    const router = nextRouterMock.useRouter();
    return {
      ...router,
      refresh: jest.fn(),
      push: jest.fn().mockReturnValue(Promise.resolve(true)),
    };
  });

  const usePathname = jest.fn().mockImplementation(() => {
    const router = useRouter();
    return router.asPath;
  });

  const useSearchParams = jest.fn().mockImplementation(() => {
    const router = useRouter();
    return new URLSearchParams(router.query);
  });

  return {
    ...actual,
    useRouter,
    usePathname,
    useSearchParams,
  };
});

export { mockRouter };
