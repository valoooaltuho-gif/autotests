import { APIRequestContext } from '@playwright/test';

export class UserClient {
  
  constructor(private readonly request: APIRequestContext, private readonly baseUrl: string) {}

  async getSecretAndRefresh() {
    const response = await this.request.post(`${this.baseUrl}v1/register`, {
      data: { 
        token: '12345678901234567890123456789012' 
      }
    });
    return response;
  }

}
