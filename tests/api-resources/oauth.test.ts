// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import YolkenIncreaseTest from 'yolken-increase-test';

const client = new YolkenIncreaseTest({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource oauth', () => {
  // Mock server tests are disabled
  test.skip('createToken: only required params', async () => {
    const responsePromise = client.oauth.createToken({ grant_type: 'authorization_code' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createToken: required and optional params', async () => {
    const response = await client.oauth.createToken({
    grant_type: 'authorization_code',
    client_id: '12345',
    client_secret: 'supersecret',
    code: '123',
    production_token: 'x',
  });
  });
});
