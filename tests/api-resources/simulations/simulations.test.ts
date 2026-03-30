// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import YolkenIncreaseTest from 'yolken-increase-test';

const client = new YolkenIncreaseTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource simulations', () => {
  // Mock server tests are disabled
  test.skip('confirmFuelAuthorization: only required params', async () => {
    const responsePromise = client.simulations.confirmFuelAuthorization({
      amount: 5000,
      card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
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
  test.skip('confirmFuelAuthorization: required and optional params', async () => {
    const response = await client.simulations.confirmFuelAuthorization({
      amount: 5000,
      card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
    });
  });

  // Mock server tests are disabled
  test.skip('createAccountStatement: only required params', async () => {
    const responsePromise = client.simulations.createAccountStatement({
      account_id: 'account_in71c4amph0vgo2qllky',
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
  test.skip('createAccountStatement: required and optional params', async () => {
    const response = await client.simulations.createAccountStatement({
      account_id: 'account_in71c4amph0vgo2qllky',
    });
  });

  // Mock server tests are disabled
  test.skip('createCardAuthorization: only required params', async () => {
    const responsePromise = client.simulations.createCardAuthorization({ amount: 1000 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createCardAuthorization: required and optional params', async () => {
    const response = await client.simulations.createCardAuthorization({
      amount: 1000,
      authenticated_card_payment_id: 'authenticated_card_payment_id',
      card_id: 'card_oubs0hwk5rn6knuecxg2',
      decline_reason: 'account_closed',
      digital_wallet_token_id: 'digital_wallet_token_id',
      event_subscription_id: 'event_subscription_001dzz0r20rcdxgb013zqb8m04g',
      merchant_acceptor_id: '5665270011000168',
      merchant_category_code: '5734',
      merchant_city: 'New York',
      merchant_country: 'US',
      merchant_descriptor: 'AMAZON.COM',
      merchant_state: 'NY',
      network_details: { visa: { stand_in_processing_reason: 'issuer_error' } },
      network_risk_score: 0,
      physical_card_id: 'physical_card_id',
      processing_category: {
        category: 'account_funding',
        refund: { original_card_payment_id: 'original_card_payment_id' },
      },
      terminal_id: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('createCardBalanceInquiry', async () => {
    const responsePromise = client.simulations.createCardBalanceInquiry({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createCardToken', async () => {
    const responsePromise = client.simulations.createCardToken({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createDigitalWalletTokenRequest: only required params', async () => {
    const responsePromise = client.simulations.createDigitalWalletTokenRequest({
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
  test.skip('createDigitalWalletTokenRequest: required and optional params', async () => {
    const response = await client.simulations.createDigitalWalletTokenRequest({
      card_id: 'card_oubs0hwk5rn6knuecxg2',
    });
  });

  // Mock server tests are disabled
  test.skip('createInboundACHTransfer: only required params', async () => {
    const responsePromise = client.simulations.createInboundACHTransfer({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
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
  test.skip('createInboundACHTransfer: required and optional params', async () => {
    const response = await client.simulations.createInboundACHTransfer({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
      addenda: {
        category: 'freeform',
        freeform: { entries: [{ payment_related_information: 'x' }] },
      },
      company_descriptive_date: 'x',
      company_discretionary_data: 'x',
      company_entry_description: 'x',
      company_id: 'x',
      company_name: 'x',
      receiver_id_number: 'x',
      receiver_name: 'x',
      resolve_at: '2019-12-27T18:11:19.117Z',
      standard_entry_class_code: 'corporate_credit_or_debit',
    });
  });

  // Mock server tests are disabled
  test.skip('createInboundFednowTransfer: only required params', async () => {
    const responsePromise = client.simulations.createInboundFednowTransfer({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
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
  test.skip('createInboundFednowTransfer: required and optional params', async () => {
    const response = await client.simulations.createInboundFednowTransfer({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
      debtor_account_number: 'x',
      debtor_name: 'x',
      debtor_routing_number: 'xxxxxxxxx',
      unstructured_remittance_information: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('createInboundMailItem: only required params', async () => {
    const responsePromise = client.simulations.createInboundMailItem({
      amount: 1000,
      lockbox_id: 'lockbox_3xt21ok13q19advds4t5',
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
  test.skip('createInboundMailItem: required and optional params', async () => {
    const response = await client.simulations.createInboundMailItem({
      amount: 1000,
      lockbox_id: 'lockbox_3xt21ok13q19advds4t5',
      contents_file_id: 'contents_file_id',
    });
  });

  // Mock server tests are disabled
  test.skip('createInboundRealTimePaymentsTransfer: only required params', async () => {
    const responsePromise = client.simulations.createInboundRealTimePaymentsTransfer({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
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
  test.skip('createInboundRealTimePaymentsTransfer: required and optional params', async () => {
    const response = await client.simulations.createInboundRealTimePaymentsTransfer({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
      debtor_account_number: 'x',
      debtor_name: 'x',
      debtor_routing_number: 'xxxxxxxxx',
      request_for_payment_id: 'real_time_payments_request_for_payment_28kcliz1oevcnqyn9qp7',
      unstructured_remittance_information: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('createInboundWireDrawdownRequest: only required params', async () => {
    const responsePromise = client.simulations.createInboundWireDrawdownRequest({
      amount: 10000,
      creditor_account_number: '987654321',
      creditor_routing_number: '101050001',
      currency: 'USD',
      recipient_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
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
  test.skip('createInboundWireDrawdownRequest: required and optional params', async () => {
    const response = await client.simulations.createInboundWireDrawdownRequest({
      amount: 10000,
      creditor_account_number: '987654321',
      creditor_routing_number: '101050001',
      currency: 'USD',
      recipient_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      creditor_address_line1: '33 Liberty Street',
      creditor_address_line2: 'New York, NY, 10045',
      creditor_address_line3: 'x',
      creditor_name: 'Ian Crease',
      debtor_account_number: '987654321',
      debtor_address_line1: '33 Liberty Street',
      debtor_address_line2: 'New York, NY, 10045',
      debtor_address_line3: 'x',
      debtor_name: 'Ian Crease',
      debtor_routing_number: '101050001',
      end_to_end_identification: 'x',
      instruction_identification: 'x',
      unique_end_to_end_transaction_reference: 'x',
      unstructured_remittance_information: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('createInboundWireTransfer: only required params', async () => {
    const responsePromise = client.simulations.createInboundWireTransfer({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
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
  test.skip('createInboundWireTransfer: required and optional params', async () => {
    const response = await client.simulations.createInboundWireTransfer({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
      creditor_address_line1: 'x',
      creditor_address_line2: 'x',
      creditor_address_line3: 'x',
      creditor_name: 'x',
      debtor_address_line1: 'x',
      debtor_address_line2: 'x',
      debtor_address_line3: 'x',
      debtor_name: 'x',
      end_to_end_identification: 'x',
      instructing_agent_routing_number: 'x',
      instruction_identification: 'x',
      unique_end_to_end_transaction_reference: 'x',
      unstructured_remittance_information: 'x',
      wire_drawdown_request_id: 'wire_drawdown_request_id',
    });
  });

  // Mock server tests are disabled
  test.skip('createInterestPayment: only required params', async () => {
    const responsePromise = client.simulations.createInterestPayment({
      account_id: 'account_in71c4amph0vgo2qllky',
      amount: 1000,
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
  test.skip('createInterestPayment: required and optional params', async () => {
    const response = await client.simulations.createInterestPayment({
      account_id: 'account_in71c4amph0vgo2qllky',
      amount: 1000,
      accrued_on_account_id: 'accrued_on_account_id',
      period_end: '2019-12-27T18:11:19.117Z',
      period_start: '2019-12-27T18:11:19.117Z',
    });
  });

  // Mock server tests are disabled
  test.skip('createProgram: only required params', async () => {
    const responsePromise = client.simulations.createProgram({ name: 'For Benefit Of' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createProgram: required and optional params', async () => {
    const response = await client.simulations.createProgram({
      name: 'For Benefit Of',
      bank: 'core_bank',
      lending_maximum_extendable_credit: 0,
      reserve_account_id: 'reserve_account_id',
    });
  });

  // Mock server tests are disabled
  test.skip('expireCardAuthorization: only required params', async () => {
    const responsePromise = client.simulations.expireCardAuthorization({
      card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
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
  test.skip('expireCardAuthorization: required and optional params', async () => {
    const response = await client.simulations.expireCardAuthorization({
      card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
    });
  });

  // Mock server tests are disabled
  test.skip('generateTaxFormExport: only required params', async () => {
    const responsePromise = client.simulations.generateTaxFormExport({ category: 'form_1099_int' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('generateTaxFormExport: required and optional params', async () => {
    const response = await client.simulations.generateTaxFormExport({
      category: 'form_1099_int',
      form_1099_int: { account_id: 'account_in71c4amph0vgo2qllky' },
    });
  });

  // Mock server tests are disabled
  test.skip('incrementCardAuthorization: only required params', async () => {
    const responsePromise = client.simulations.incrementCardAuthorization({
      amount: 500,
      card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
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
  test.skip('incrementCardAuthorization: required and optional params', async () => {
    const response = await client.simulations.incrementCardAuthorization({
      amount: 500,
      card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
      event_subscription_id: 'event_subscription_id',
    });
  });

  // Mock server tests are disabled
  test.skip('refundCardTransaction', async () => {
    const responsePromise = client.simulations.refundCardTransaction({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('reverseCardAuthorization: only required params', async () => {
    const responsePromise = client.simulations.reverseCardAuthorization({
      card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
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
  test.skip('reverseCardAuthorization: required and optional params', async () => {
    const response = await client.simulations.reverseCardAuthorization({
      card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
      amount: 1,
    });
  });

  // Mock server tests are disabled
  test.skip('settleCardAuthorization: only required params', async () => {
    const responsePromise = client.simulations.settleCardAuthorization({
      card_id: 'card_oubs0hwk5rn6knuecxg2',
      pending_transaction_id: 'pending_transaction_k1sfetcau2qbvjbzgju4',
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
  test.skip('settleCardAuthorization: required and optional params', async () => {
    const response = await client.simulations.settleCardAuthorization({
      card_id: 'card_oubs0hwk5rn6knuecxg2',
      pending_transaction_id: 'pending_transaction_k1sfetcau2qbvjbzgju4',
      amount: 1,
    });
  });
});
