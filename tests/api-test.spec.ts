import { test, expect } from './fixtures';

test('получение токена статус 200', async ({ userClient }) => {
  const response = await userClient.getSecretAndRefresh();
  
  // Проверяем статус
  expect(response.status()).toBe(200);
  
  // Проверяем тело ответа
  const body = await response.json();
  // 2. Проверяем структуру и значения
  expect(body).toMatchObject({
    success: true,
    data: {
      // Проверка, что это строки и они не пустые
      token: expect.any(String),
      refresh: expect.any(String)
    }
  });

  // 3. Дополнительная проверка на длину или наличие символов (если нужно)
  expect(body.data.token.length).toBeGreaterThan(0);
  expect(body.data.refresh).not.toBe('');
});
