// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import YolkenIncreaseTest from 'yolken-increase-test';

const client = new YolkenIncreaseTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cardAuthentications', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.simulations.cardAuthentications.create({
      card_id: 'card_oubs0hwk5rn6knuecxg2',
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
    const response = await client.simulations.cardAuthentications.create({
      card_id: 'card_oubs0hwk5rn6knuecxg2',
      category: 'payment_authentication',
      device_channel: 'app',
      merchant_acceptor_id: '5665270011000168',
      merchant_category_code: '5734',
      merchant_country: 'US',
      merchant_name: 'x',
      purchase_amount: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('createChallenge', async () => {
    const responsePromise = client.simulations.cardAuthentications.createChallenge(
      'card_payment_nd3k2kacrqjli8482ave',
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
  test.skip('createChallengeAttempt: only required params', async () => {
    const responsePromise = client.simulations.cardAuthentications.createChallengeAttempt(
      'card_payment_nd3k2kacrqjli8482ave',
      { one_time_code: '123456' },
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
  test.skip('createChallengeAttempt: required and optional params', async () => {
    const response = await client.simulations.cardAuthentications.createChallengeAttempt(
      'card_payment_nd3k2kacrqjli8482ave',
      { one_time_code: '123456' },
    );
  });
});
