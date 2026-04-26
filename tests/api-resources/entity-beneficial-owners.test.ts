// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import YolkenIncreaseTest from 'yolken-increase-test';

const client = new YolkenIncreaseTest({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource entityBeneficialOwners', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.entityBeneficialOwners.create({
    entity_id: 'entity_n8y8tnk2p9339ti393yi',
    individual: {
    address: {
    city: 'New York',
    country: 'US',
    line1: '33 Liberty Street',
  },
    date_of_birth: '1970-01-31',
    identification: { method: 'social_security_number', number: '078051120' },
    name: 'Ian Crease',
  },
    prongs: ['control'],
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
    const response = await client.entityBeneficialOwners.create({
    entity_id: 'entity_n8y8tnk2p9339ti393yi',
    individual: {
    address: {
    city: 'New York',
    country: 'US',
    line1: '33 Liberty Street',
    line2: 'x',
    state: 'NY',
    zip: '10045',
  },
    date_of_birth: '1970-01-31',
    identification: {
    method: 'social_security_number',
    number: '078051120',
    drivers_license: {
    expiration_date: '2019-12-27',
    file_id: 'file_id',
    state: 'x',
    back_file_id: 'back_file_id',
  },
    other: {
    country: 'x',
    description: 'x',
    file_id: 'file_id',
    back_file_id: 'back_file_id',
    expiration_date: '2019-12-27',
  },
    passport: {
    country: 'x',
    expiration_date: '2019-12-27',
    file_id: 'file_id',
  },
  },
    name: 'Ian Crease',
    confirmed_no_us_tax_id: true,
  },
    prongs: ['control'],
    company_title: 'CEO',
  });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.entityBeneficialOwners.retrieve('entity_beneficial_owner_vozma8szzu1sxezp5zq6');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.entityBeneficialOwners.update('entity_beneficial_owner_vozma8szzu1sxezp5zq6', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.entityBeneficialOwners.list({ entity_id: 'entity_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.entityBeneficialOwners.list({
    entity_id: 'entity_id',
    cursor: 'cursor',
    idempotency_key: 'x',
    limit: 1,
  });
  });

  // Mock server tests are disabled
  test.skip('archive', async () => {
    const responsePromise = client.entityBeneficialOwners.archive('entity_beneficial_owner_vozma8szzu1sxezp5zq6');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
