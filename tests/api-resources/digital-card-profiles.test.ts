// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import YolkenIncreaseTest from 'yolken-increase-test';

const client = new YolkenIncreaseTest({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource digitalCardProfiles', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.digitalCardProfiles.create({
    app_icon_file_id: 'file_8zxqkwlh43wo144u8yec',
    background_image_file_id: 'file_1ai913suu1zfn1pdetru',
    card_description: 'MyBank Signature Card',
    description: 'My Card Profile',
    issuer_name: 'MyBank',
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
    const response = await client.digitalCardProfiles.create({
    app_icon_file_id: 'file_8zxqkwlh43wo144u8yec',
    background_image_file_id: 'file_1ai913suu1zfn1pdetru',
    card_description: 'MyBank Signature Card',
    description: 'My Card Profile',
    issuer_name: 'MyBank',
    contact_email: 'user@example.com',
    contact_phone: '+18885551212',
    contact_website: 'https://example.com',
    text_color: {
    blue: 59,
    green: 43,
    red: 26,
  },
  });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.digitalCardProfiles.retrieve('digital_card_profile_s3puplu90f04xhcwkiga');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.digitalCardProfiles.list();
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
    await expect(client.digitalCardProfiles.list({
    cursor: 'cursor',
    idempotency_key: 'x',
    limit: 1,
    status: { in: ['pending'] },
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(YolkenIncreaseTest.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('archive', async () => {
    const responsePromise = client.digitalCardProfiles.archive('digital_card_profile_s3puplu90f04xhcwkiga');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('clone', async () => {
    const responsePromise = client.digitalCardProfiles.clone('digital_card_profile_s3puplu90f04xhcwkiga', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
