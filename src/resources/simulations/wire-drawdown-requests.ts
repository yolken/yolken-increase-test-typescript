// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class WireDrawdownRequests extends APIResource {
  /**
   * Simulates a Wire Drawdown Request being refused by the debtor.
   *
   * @example
   * ```ts
   * const wireDrawdownRequest =
   *   await client.simulations.wireDrawdownRequests.refuse(
   *     'wire_drawdown_request_q6lmocus3glo0lr2bfv3',
   *   );
   * ```
   */
  refuse(wireDrawdownRequestID: string, options?: RequestOptions): APIPromise<WireDrawdownRequest> {
    return this._client.post(
      path`/simulations/wire_drawdown_requests/${wireDrawdownRequestID}/refuse`,
      options,
    );
  }

  /**
   * Simulates a Wire Drawdown Request being submitted to Fedwire.
   *
   * @example
   * ```ts
   * const wireDrawdownRequest =
   *   await client.simulations.wireDrawdownRequests.submit(
   *     'wire_drawdown_request_q6lmocus3glo0lr2bfv3',
   *   );
   * ```
   */
  submit(wireDrawdownRequestID: string, options?: RequestOptions): APIPromise<WireDrawdownRequest> {
    return this._client.post(
      path`/simulations/wire_drawdown_requests/${wireDrawdownRequestID}/submit`,
      options,
    );
  }
}

/**
 * Wire drawdown requests enable you to request that someone else send you a wire.
 * Because there is nuance to making sure your counterparty's bank processes these
 * correctly, we ask that you reach out to
 * [support@increase.com](mailto:support@increase.com) to enable this feature so we
 * can help you plan your integration. For more information, see our
 * [Wire Drawdown Requests documentation](/documentation/wire-drawdown-requests).
 */
export interface WireDrawdownRequest {
  /**
   * The Wire drawdown request identifier.
   */
  id: string;

  /**
   * The Account Number to which the debtor—the recipient of this request—is being
   * requested to send funds.
   */
  account_number_id: string;

  /**
   * The amount being requested in cents.
   */
  amount: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the wire drawdown request was created.
   */
  created_at: string;

  /**
   * The creditor's address.
   */
  creditor_address: WireDrawdownRequest.CreditorAddress;

  /**
   * The creditor's name.
   */
  creditor_name: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the amount being
   * requested. Will always be "USD".
   */
  currency: string;

  /**
   * The debtor's account number.
   */
  debtor_account_number: string;

  /**
   * The debtor's address.
   */
  debtor_address: WireDrawdownRequest.DebtorAddress;

  /**
   * The debtor's external account identifier.
   */
  debtor_external_account_id: string | null;

  /**
   * The debtor's name.
   */
  debtor_name: string;

  /**
   * The debtor's routing number.
   */
  debtor_routing_number: string;

  /**
   * If the recipient fulfills the drawdown request by sending funds, then this will
   * be the identifier of the corresponding Transaction.
   */
  fulfillment_inbound_wire_transfer_id: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The lifecycle status of the drawdown request.
   *
   * - `pending_submission` - The drawdown request is queued to be submitted to
   *   Fedwire.
   * - `fulfilled` - The drawdown request has been fulfilled by the recipient.
   * - `pending_response` - The drawdown request has been sent and the recipient
   *   should respond in some way.
   * - `refused` - The drawdown request has been refused by the recipient.
   */
  status: 'pending_submission' | 'fulfilled' | 'pending_response' | 'refused';

  /**
   * After the drawdown request is submitted to Fedwire, this will contain
   * supplemental details.
   */
  submission: WireDrawdownRequest.Submission | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `wire_drawdown_request`.
   */
  type: 'wire_drawdown_request';

  /**
   * Remittance information the debtor will see as part of the drawdown request.
   */
  unstructured_remittance_information: string;

  [k: string]: unknown;
}

export namespace WireDrawdownRequest {
  /**
   * The creditor's address.
   */
  export interface CreditorAddress {
    /**
     * The city, district, town, or village of the address.
     */
    city: string;

    /**
     * The two-letter
     * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code for
     * the country of the address.
     */
    country: string;

    /**
     * The first line of the address.
     */
    line1: string;

    /**
     * The second line of the address.
     */
    line2: string | null;

    /**
     * The ZIP code of the address.
     */
    postal_code: string | null;

    /**
     * The address state.
     */
    state: string | null;
  }

  /**
   * The debtor's address.
   */
  export interface DebtorAddress {
    /**
     * The city, district, town, or village of the address.
     */
    city: string;

    /**
     * The two-letter
     * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code for
     * the country of the address.
     */
    country: string;

    /**
     * The first line of the address.
     */
    line1: string;

    /**
     * The second line of the address.
     */
    line2: string | null;

    /**
     * The ZIP code of the address.
     */
    postal_code: string | null;

    /**
     * The address state.
     */
    state: string | null;
  }

  /**
   * After the drawdown request is submitted to Fedwire, this will contain
   * supplemental details.
   */
  export interface Submission {
    /**
     * The input message accountability data (IMAD) uniquely identifying the submission
     * with Fedwire.
     */
    input_message_accountability_data: string;
  }
}

export declare namespace WireDrawdownRequests {
  export { type WireDrawdownRequest as WireDrawdownRequest };
}
