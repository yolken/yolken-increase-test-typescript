// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import YolkenIncreaseTest from 'yolken-increase-test';

const client = new YolkenIncreaseTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource achTransfers', () => {
  // Mock server tests are disabled
  test.skip('acknowledge', async () => {
    const responsePromise = client.simulations.achTransfers.acknowledge('ach_transfer_uoxatyh3lt5evrsdvo7q');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createNotificationOfChange: only required params', async () => {
    const responsePromise = client.simulations.achTransfers.createNotificationOfChange(
      'ach_transfer_uoxatyh3lt5evrsdvo7q',
      { change_code: 'incorrect_routing_number', corrected_data: '123456789' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createNotificationOfChange: required and optional params', async () => {
    const response = await client.simulations.achTransfers.createNotificationOfChange(
      'ach_transfer_uoxatyh3lt5evrsdvo7q',
      { change_code: 'incorrect_routing_number', corrected_data: '123456789' },
    );
  });

  // Mock server tests are disabled
  test.skip('return', async () => {
    const responsePromise = client.simulations.achTransfers.return('ach_transfer_uoxatyh3lt5evrsdvo7q', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('settle', async () => {
    const responsePromise = client.simulations.achTransfers.settle('ach_transfer_uoxatyh3lt5evrsdvo7q', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('submit', async () => {
    const responsePromise = client.simulations.achTransfers.submit('ach_transfer_uoxatyh3lt5evrsdvo7q');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
