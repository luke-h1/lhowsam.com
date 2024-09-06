import { GET } from './route';

test('should return version details', async () => {
  const response = await GET();
  const body = await response.json();
  expect(response.status).toEqual(200);
  expect(body).toEqual({
    deployedAt: expect.any(String),
    deployedBy: expect.any(String),
    gitSha: expect.any(String),
    version: '0.1.0',
  });
});
