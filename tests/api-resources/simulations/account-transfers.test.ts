// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import YolkenIncreaseTest from 'yolken-increase-test';

const client = new YolkenIncreaseTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountTransfers', () => {
  // Mock server tests are disabled
  test.skip('completeTransfer', async () => {
    const responsePromise = client.simulations.accountTransfers.completeTransfer(
      'account_transfer_7k9qe1ysdgqztnt63l7n',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
