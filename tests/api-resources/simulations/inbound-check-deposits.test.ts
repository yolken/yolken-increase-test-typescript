// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import YolkenIncreaseTest from 'yolken-increase-test';

const client = new YolkenIncreaseTest({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource inboundCheckDeposits', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.simulations.inboundCheckDeposits.create({
    account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
    amount: 1000,
    check_number: '1234567890',
  });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.simulations.inboundCheckDeposits.create({
    account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
    amount: 1000,
    check_number: '1234567890',
    payee_name_analysis: 'name_matches',
  });
  });

  // Mock server tests are disabled
  test.skip('adjust', async () => {
    const responsePromise = client.simulations.inboundCheckDeposits.adjust('inbound_check_deposit_zoshvqybq0cjjm31mra', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
