// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import YolkenIncreaseTest from 'yolken-increase-test';

const client = new YolkenIncreaseTest({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource bookkeepingAccounts', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.bookkeepingAccounts.create({ name: 'New Account!' });
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
    const response = await client.bookkeepingAccounts.create({
    name: 'New Account!',
    account_id: 'account_id',
    compliance_category: 'commingled_cash',
    entity_id: 'entity_id',
  });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.bookkeepingAccounts.update('bookkeeping_account_e37p1f1iuocw5intf35v', { name: 'Deprecated Account' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.bookkeepingAccounts.update('bookkeeping_account_e37p1f1iuocw5intf35v', { name: 'Deprecated Account' });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.bookkeepingAccounts.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.bookkeepingAccounts.list({
    cursor: 'cursor',
    idempotency_key: 'x',
    limit: 1,
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(YolkenIncreaseTest.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveBalance', async () => {
    const responsePromise = client.bookkeepingAccounts.retrieveBalance('bookkeeping_account_e37p1f1iuocw5intf35v');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveBalance: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.bookkeepingAccounts.retrieveBalance('bookkeeping_account_e37p1f1iuocw5intf35v', { at_time: '2019-12-27T18:11:19.117Z' }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(YolkenIncreaseTest.NotFoundError);
  });
});
