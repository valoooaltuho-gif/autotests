import { test, expect } from './fixtures';

test('get token with status 200', async ({ userClient }) => {
  const response = await userClient.getSecretAndRefresh();
  
  expect(response.status()).toBe(200);
  
  const body = await response.json();
  expect(body).toMatchObject({
    success: true,
    data: {
      token: expect.any(String),
      refresh: expect.any(String)
    }
  });

  expect(body.data.token.length).toBeGreaterThan(0);
  expect(body.data.refresh).not.toBe('');
});
