// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class InboundWireDrawdownRequests extends APIResource {
  /**
   * Retrieve an Inbound Wire Drawdown Request
   *
   * @example
   * ```ts
   * const inboundWireDrawdownRequest =
   *   await client.inboundWireDrawdownRequests.retrieve(
   *     'inbound_wire_drawdown_request_u5a92ikqhz1ytphn799e',
   *   );
   * ```
   */
  retrieve(inboundWireDrawdownRequestID: string, options?: RequestOptions): APIPromise<InboundWireDrawdownRequest> {
    return this._client.get(path`/inbound_wire_drawdown_requests/${inboundWireDrawdownRequestID}`, options);
  }

  /**
   * List Inbound Wire Drawdown Requests
   *
   * @example
   * ```ts
   * const inboundWireDrawdownRequests =
   *   await client.inboundWireDrawdownRequests.list();
   * ```
   */
  list(query: InboundWireDrawdownRequestListParams | null | undefined = {}, options?: RequestOptions): APIPromise<InboundWireDrawdownRequestListResponse> {
    return this._client.get('/inbound_wire_drawdown_requests', { query, ...options });
  }
}

/**
 * Inbound wire drawdown requests are requests from someone else to send them a
 * wire. For more information, see our
 * [Wire Drawdown Requests documentation](/documentation/wire-drawdown-requests).
 */
export interface InboundWireDrawdownRequest {
  /**
   * The Wire drawdown request identifier.
   */
  id: string;

  /**
   * The amount being requested in cents.
   */
  amount: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the inbound wire drawdown request was created.
   */
  created_at: string;

  /**
   * The creditor's account number.
   */
  creditor_account_number: string;

  /**
   * A free-form address field set by the sender.
   */
  creditor_address_line1: string | null;

  /**
   * A free-form address field set by the sender.
   */
  creditor_address_line2: string | null;

  /**
   * A free-form address field set by the sender.
   */
  creditor_address_line3: string | null;

  /**
   * A name set by the sender.
   */
  creditor_name: string | null;

  /**
   * The creditor's routing number.
   */
  creditor_routing_number: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the amount being
   * requested. Will always be "USD".
   */
  currency: string;

  /**
   * A free-form address field set by the sender.
   */
  debtor_address_line1: string | null;

  /**
   * A free-form address field set by the sender.
   */
  debtor_address_line2: string | null;

  /**
   * A free-form address field set by the sender.
   */
  debtor_address_line3: string | null;

  /**
   * A name set by the sender.
   */
  debtor_name: string | null;

  /**
   * A free-form reference string set by the sender, to help identify the drawdown
   * request.
   */
  end_to_end_identification: string | null;

  /**
   * A unique identifier available to the originating and receiving banks, commonly
   * abbreviated as IMAD. It is created when the wire is submitted to the Fedwire
   * service and is helpful when debugging wires with the originating bank.
   */
  input_message_accountability_data: string | null;

  /**
   * The sending bank's identifier for the drawdown request.
   */
  instruction_identification: string | null;

  /**
   * The Account Number from which the recipient of this request is being requested
   * to send funds.
   */
  recipient_account_number_id: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_wire_drawdown_request`.
   */
  type: 'inbound_wire_drawdown_request';

  /**
   * The Unique End-to-end Transaction Reference
   * ([UETR](https://www.swift.com/payments/what-unique-end-end-transaction-reference-uetr))
   * of the drawdown request.
   */
  unique_end_to_end_transaction_reference: string | null;

  /**
   * A free-form message set by the sender.
   */
  unstructured_remittance_information: string | null;

[k: string]: unknown
}

/**
 * A list of Inbound Wire Drawdown Request objects.
 */
export interface InboundWireDrawdownRequestListResponse {
  /**
   * The contents of the list.
   */
  data: Array<InboundWireDrawdownRequest>;

  /**
   * A pointer to a place in the list.
   */
  next_cursor: string | null;

[k: string]: unknown
}

export interface InboundWireDrawdownRequestListParams {
  /**
   * Return the page of entries after this one.
   */
  cursor?: string;

  /**
   * Limit the size of the list that is returned. The default (and maximum) is 100
   * objects.
   */
  limit?: number;
}

export declare namespace InboundWireDrawdownRequests {
  export {
    type InboundWireDrawdownRequest as InboundWireDrawdownRequest,
    type InboundWireDrawdownRequestListResponse as InboundWireDrawdownRequestListResponse,
    type InboundWireDrawdownRequestListParams as InboundWireDrawdownRequestListParams
  };
}
