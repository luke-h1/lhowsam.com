import { GET } from './route';

test('should return OK with 200', async () => {
  const response = await GET();
  const body = await response.json();
  expect(response.status).toBe(200);
  expect(body).toEqual({ status: 'OK' });
});
