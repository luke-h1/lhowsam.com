import { createApiMocks } from '@frontend/test/apiRouteMocks';
import { withMethods } from '../withMethods';

describe('witHMethods', () => {
  test('it should call the handler function when the request method is allowed', async () => {
    const handler = jest.fn();

    const { req, res } = createApiMocks();

    req.method = 'GET';

    const wrappedHandler = withMethods(['GET'], handler);

    await wrappedHandler(req, res);

    expect(handler).toHaveBeenCalledWith(req, res);
  });
  test('it should call handler function when multiple request methods are allowed', async () => {
    const handler = jest.fn();

    const { req, res } = createApiMocks();

    req.method = 'GET';

    const wrappedHandler = withMethods(['GET'], handler);

    await wrappedHandler(req, res);

    expect(handler).toHaveBeenCalledWith(req, res);

    req.method = 'POST';

    const wrappedHandler2 = withMethods(['GET', 'POST'], handler);

    await wrappedHandler2(req, res);

    expect(handler).toHaveBeenCalledWith(req, res);
  });

  test('it returns 405 response when request method is not allowed', async () => {
    const handler = jest.fn();

    const { req, res } = createApiMocks();

    req.method = 'PUT';

    const wrappedHandler = withMethods(['GET', 'POST'], handler);

    await wrappedHandler(req, res);

    expect(res.statusCode).toBe(405);

    expect(handler).not.toHaveBeenCalled();
  });
});
