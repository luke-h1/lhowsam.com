import { NextApiRequest, NextApiResponse } from 'next';
import { withMethods } from '../withMethods';

describe('withMethods', () => {
  it('should return 405 if the method is not allowed', async () => {
    const mockRequest = {
      method: 'POST',
    } as NextApiRequest;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      end: jest.fn(),
    } as unknown as NextApiResponse;

    const mockHandler = jest.fn();

    const wrappedHandler = withMethods(['GET'], mockHandler);
    await wrappedHandler(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(405);
    expect(mockResponse.end).toHaveBeenCalled();
    expect(mockHandler).not.toHaveBeenCalled();
  });

  it('should call the handler if the method is allowed', async () => {
    const mockRequest = {
      method: 'GET',
    } as NextApiRequest;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      end: jest.fn(),
    } as unknown as NextApiResponse;

    const mockHandler = jest.fn();

    const wrappedHandler = withMethods(['GET'], mockHandler);
    await wrappedHandler(mockRequest, mockResponse);

    expect(mockHandler).toHaveBeenCalledWith(mockRequest, mockResponse);
  });
});
